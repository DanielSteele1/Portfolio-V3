import { VscBracketError } from "react-icons/vsc";


function NotFound() {

  return (
    <>
      <section className="NotFound">

        <a href="/" className="error-link">
          <div className="ErrorMessageContainer">
            <span className="ErrorSVG">
              <VscBracketError />
            </span>

            <span className="ErrorMessage">
              Error 404 - Page Not Found. Please click here to return to the homepage.
            </span>

          </div>
        </a>
      </section>

    </>
  )
}

export default NotFound;
