import { Button } from "@mantine/core";
import { HiOutlineHome } from "react-icons/hi";


function NotFound() {

  return (
    <>
      <section className="NotFound">


        <div className="ErrorMessageContainer">
          <span className="ErrorSVG">
            404
          </span>
          <span className="ErrorMessage">
            Error - Page Not Found.
          </span>
          <a href="/" className="error-link">
            <Button className="fourofour-button">
              <HiOutlineHome /> Click here to return home
            </Button>
          </a>
        </div>
      </section>
    </>
  )
}

export default NotFound;
