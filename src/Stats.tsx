import { FaCity } from "react-icons/fa6";

const Statistics = () => {

    return (
        <section className="stats">
            <div className="stats-grid">

                <div className="stat" onClick ={() => window.location.href="/"}>
                    <div className="stat-number"> </div>
                    <FaCity style={{ margin: '10px'}}/> Open to work
                </div>

                <div className="stat"onClick ={() => window.location.href="/Projects"}>
                    <div className="stat-number">05 </div>
                    Projects
                </div>

                <div className="stat" onClick ={() => window.location.href="/Blog"}>
                    <div className="stat-number">03 </div>
                    Blogposts
                </div>
            </div>
        </section>
    );
}

export default Statistics;
