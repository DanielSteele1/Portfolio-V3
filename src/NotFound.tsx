import { VscBracketError } from "react-icons/vsc";


function NotFound() {

  return (
    <>
      <section className="NotFound">

        <a href="/" className="error-link">
          <div className="ErrorMessageContainer">
            <span className="ErrorSVG">
              <VscBracketError />
              404
            </span>

            <span className="ErrorMessage">
              Error - Page Not Found. Click here to return to the homepage.
            </span>

          </div>
        </a>
      </section>

    </>
  )
}

export default NotFound;
