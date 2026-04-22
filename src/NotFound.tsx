import { Button } from "@mantine/core";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";


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
          <Link  to="/" className="error-link">
            <Button className="fourofour-button">
              <HiOutlineHome /> Click here to return home
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFound;
