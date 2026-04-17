import { FaCity } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Statistics = () => {

    return (
        <section className="stats">
            <div className="stats-grid">

                <div className="stat">
                    <div className="stat-number"> </div>
                    <FaCity style={{ margin: '10px'}}/> Open to work
                </div>

                <Link  className="stat" to="/Projects">
                    <div className="stat-number">05 </div>
                    Projects
                </Link>

                <Link className="stat" to="/Blog">
                    <div className="stat-number">03 </div>
                    Blogposts
                </Link>
            </div>
        </section>
    );
}

export default Statistics;
