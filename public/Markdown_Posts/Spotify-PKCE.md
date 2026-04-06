## What is PKCE? 
PKCE (Proof Key for Code Exchange) is a necessary extension to OAuth 2.0. It's a way to authenticate your (frontend) app with an API in order to generate an access token, used to access specific data. 
It's especially effective in frontend applications because it's quick to implement compared to a full-stack solution, and doesn't require a need to save sensitive data in order to authenticate. The most you'll ever save is a refresh token (usually in local or session storage).

## How can I implement it into my app? 
We'll go through the steps in this guide on how to implement a PKCE flow into your frontend app. The below steps involve generating a secure code, verifying that code, then exchanging it for an access token, which you can then finally use to make a secure API call. For this write-up, i'll use Spotify's PKCE as an example. we'll focus on getting back user data. 

## Developer Dashboard 
Firstly, you'll need to go to your services developer documentation, and check if they have a PKCE flow to begin with. In Spotify's case, they have a dedicated dashboard for any developer that wants to utilise their app, and requires them to register said app with spotfiy first. Click [here](https://developer.spotify.com/dashboard) and register your app, then set a redirect URI. (this is where a user will be redirected to after logging in with spotify, the route must be exact). Also make a note of your ClientId.  

![spotify-dev-dashboard](/spotify-dev-dashboard.png "Spotify's developer dashboard")

## Generate a code verifier & challenge

Once you have your app registered, head over to your IDE and create a login page. Inside, create an async function called Authentication. This function will trigger when the user logs into the app. Once they click login, they will be sent to a page on spotify's domain to authenticate the app, along with a code challenge to identify the app. 

We need to generate a random string in order to securely hash the code challenge. The function generateRandomString() does this for every user and provides a unique string on authentication. This is our codeVerifier. We then have to hash the code using SHA256, which scrambles the code, making it unable to be decoded. Finally, we need to base64 encode the result. 

We now have a code verifier and a code challenge (which is a hashed version of the verifier). The idea is that once a user is redirected to the auth page, a challenge is sent to the server, telling it that we have a code. The code verifier is then sent afterwards, checked upon the code challenge, and then either accepted or denied. Think of it like a one-time ID card for our app. 

It's important that we then save the codeVerifier into localStorage, as we'll need it later.

```js
  async function Authentication() {

    // generate a random string of text

    const generateRandomString = (length: number) => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const values = crypto.getRandomValues(new Uint8Array(length));
        return values.reduce((acc, x) => acc + possible[x % possible.length], "");
    }

    // save into codeVerifier
    const codeVerifier = generateRandomString(64);

    const sha256 = async (plain: any) => {
        const encoder = new TextEncoder()
        const data = encoder.encode(plain)
        return window.crypto.subtle.digest('SHA-256', data)
    }

    const base64encode = (input: ArrayBuffer) => {

        return btoa(String.fromCharCode(...new Uint8Array(input)))
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    }

    const hashed = await sha256(codeVerifier)
        // hash the codeVerifier and create a codeChallenge
    const codeChallenge = base64encode(hashed);

        // save to localStorage
    localStorage.setItem('code_verifier', codeVerifier);

}
```

Now that we've generated a code verifier and a code challenge, we can send the user off to be verified. You will need the following: an authentication url (the url that a user is going to be sent to to log in with spotify), parameters for our request, including our client_id, code_challenge, code_challenge_method, and our redirect_uri. (see below).

Specifically for Spotify's API you'll also need a scope. Scope is just a way of telling spotify what you actually want to use it's API for. Once we have these laid out, we're ready to send the user off to actually log in.

```js
    // get request to the authorization endpoint

    const scope = 'user-read-private';

    const authUrl = new URL("https://accounts.spotify.com/authorize")

    const params = {
        response_type: 'code',
        client_id: clientId,
         scope,
        code_challenge_method: 'S256',
         code_challenge: codeChallenge,
        redirect_uri: redirectUri,
     }

        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
```

The above code will send the user off to be verified (window.location.href), along with all the parameters we've just described stored in the URL. Once they come back, they will end up on a different page (the redirect_URI).

## Exchange code for a usable access token 

Create another different page called Callback. This is where spotify will redirect the user after authentication. The entire purpose of this page is the get the access token, and then we can redirect the user to the main app. Now that the user has come back to the app we can ask the server for an access token, which we'll use to make API requests and get actual data from spotify. 

Firstly, when the user came back, spotify sent us another code to tell us the user logged in. Use UrlParams to extract it from the URL. You should also do some error handling here, if the code isn't present then that means that the user failed to login, and you should send them back to the login page with an error.

```js
 //get code from url

 const urlParams = new URLSearchParams(window.location.search);
 const code = urlParams.get("code");

    if (!code) {
     window.location.href = "https://reddit-statistics-app.vercel.app/login";
     return;
    }

 //get code verifier from localStorage

 const codeVerifier = localStorage.getItem("code_verifier");
        
    if (!codeVerifier) {
     console.error("Missing code_verifier");
     window.location.href = "/login";
     return;
    }
 ```

You also need the code verifier from localStorage. We saved this earlier. We're now ready to get an access token. 
Make a POST request with the following below, and save the result into localStorage if an access token is detected:



```js            // prepare POST request 

const tokenUrl = "https://accounts.spotify.com/api/token";
const params = new URLSearchParams({
  client_id: clientId,
   grant_type: "authorization_code",     
   code,
   redirect_uri: redirectUri,
   code_verifier: codeVerifier,
});

// handle result 

const result = await fetch(tokenUrl, {
   method: "POST",
   headers: { "Content-Type": "application/x-www-form-urlencoded" },
   body: params,
 });

const data = await result.json();

// save access token into localStorage

if (data.access_token) {

 // user logs in !
 localStorage.setItem("access_token", data.access_token);
 window.location.href = "/dashboard";

} else {
 // user goes back to login page...
     console.error("Token error:", data);
     window.location.href = "/login";

}
```

You've now completed all the steps required to use the API! All we need to do now is redirect the user again to your main app page using window.location.href and start making API calls.

## Finally, use your access token and make an api call

In order to make an API request, simply make a fetch request with the access token (grab that from localStorage) inside the authorization headers. Save that data into useState and pass it down via props to the appropriate component, then display accordingly. 

```js
async function fetchProfile() {

    const response = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${access_token}` },
    });

    const profile_data = await response.json();
        setProfileData(profile_data);
        console.log(profile_data);
    }
```

In the component, you'll need to describe the API exactly in order to display any results, so make sure you get this exact.


```js 
interface ProfileProps {
    ProfileData: {
        images: Image[];
        display_name: string;
        followers: { href: string; total: number };
        external_urls: { spotify: string };
        product: string;
    };
}

interface Image {
    url: string;
    height: number;
    width: number;
} 
```

And then display the results in your JSX.

```html

<div className="profile-info">
    <div className="profile-name">
     Welcome, {ProfileData?.display_name || 'user'} 👋
    </div>

<div className="profile-img-mobile">
    {profileImageUrl ?
    <img src={profileImageUrl} alt="profile" width="200" height="200" /> :
    <IoPersonCircle />
    }
</div>

```
And here's the finished product (i've made some extra API calls to grab more data from the user):

![alt text](/dashboard.png)

## Summary 
Congrats, now you know how to use PKCE! You can now use this method of authentication in any app to get back personalised data from a user. Just remember to refresh the access token at a regular interval, as it will refresh after an hour, (the user will have to re-authenticate), and you're all set. You'll have to get a refresh token for this.

Specifically with Spotify's API, there's a lot more you can do than just getting someones profile data. You can get a users listening history, create a social app with their followers list or even create a live music player and control playback as well as showing whatever a user is currently listening to. 

 ## 📖 Resources Used

1. [Spotify Dashboard](https://developer.spotify.com/dashboard)
2. [Spotify API Documentation](https://developer.spotify.com/documentation/web-api)