import "./App.css";
import { motion } from "motion/react"

import "/node_modules/flag-icons/css/flag-icons.min.css";
import Breadcrumbs from "./Breadcrumbs";
import { Link } from "react-router-dom";
import { FaCity, FaBookOpen, FaCode } from "react-icons/fa6";
import SkillsMarquee from "./SkillsMarquee";
import Statistics from "./Stats";
import { TooltipFloating } from "@mantine/core";
import GithubGraph from "./GithubGraph";
import { FaImage } from "react-icons/fa";

function AboutMe() {

    return (
        <motion.div
            className="about"
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="page-nav">
                <div className="breadcrumbs">
                    <Breadcrumbs />
                </div>
            </div>

            <div className="section-heading"> About <div id="highlight-name"> {`{ Me }`} </div> 💻 </div>

            <div className="About-container">
                <div className="landing-status-container">
                    <div className="landing-status">
                        <span id="status-text"> <FaCity /> Open to opportunities in the UK  </span>
                        <span id="status-text"> <FaBookOpen /> Experimenting with: MantineUI </span>

                        <Link to="https://job-board-murex-eight.vercel.app" id="status-text-a"> <FaCode style={{ fontSize: '25px' }} /> Current Project: Job Portal App</Link>
                    </div>
                </div>


                <div className="skill-marquee">
                    <SkillsMarquee />
                </div>

                <div className="landing-stats">
                    <Statistics />
                </div>

                <div className="About-text">

                    <span className="About-para-title">
                        Hi! I'm Daniel Steele, a Frontend Developer from the UK
                    </span>

                    <div className="commit-graph">
                        <GithubGraph loading={false} setLoading={function (): void {
                            throw new Error("Function not implemented.");
                        } } isThemeOn={false}/>
                    </div>

                    <div className="About-paragraph">
                        <span className="About-paragraph-text">
                            I focus on bringing creative web applications to life with a mix of clean UI design and solid frontend code.
                            I'm a big fan of working with <a id="highlight-name">React</a> and <a id="highlight-name">TypeScript</a>, and I'm always experimenting with <a id="highlight-name"> CSS </a> to make layouts pop.
                            While I'm comfortable with <a id="highlight-name">Full-stack development</a>, I love the visual, fast-paced nature of crafting polished user experiences on the frontend.</span>
                    </div>

                    <div className="About-paragraph">
                        <span className="About-paragraph-text">
                            My passion lies with front end development - ever since I was 16 years old I wanted to learn how to develop for the web.
                            Now, at 24 and after graduating from the <a id="highlight-name" href="https://www.plymouth.ac.uk"> University of Plymouth </a> in 2024,
                            I'm creating front end and full stack web apps, striving to improve with each one.
                        </span>

                    </div>

                    <div className="About-paragraph">
                        <span className="About-para-title"> My Hobbies & Personal Life </span>

                        <TooltipFloating
                            label={ <span id="banner-tooltip"> <FaImage/>  Torbay, Devon, UK </span> }
                            portalProps={{ target: document.body }}
                            id="experience-tooltip"
                        >
                            <div className="banner">
                             <img src="Picture of the Bay -website.jpg" />
                            </div>
                        </TooltipFloating>

                        <span className="About-paragraph-text">
                            Outside of web development, I spend most of my time keeping up to date with tech related news,
                            applying my knowledge of hardware to build computers as a hobby and playing PC games with friends.
                            Some of favourite games i've played in the past are <a id="highlight-name" href="https://www.nomanssky.com"> No Mans Sky </a> & both <a id="highlight-name" href="https://unknownworlds.com/en/news?game=subnautica"> Subnautica games. </a>
                        </span>
                    </div>

                    <div className="About-paragraph">
                        <span className="About-para-title"> What am i up to right now? </span>

                        <span className="About-paragraph-text">
                            Right now, i'm making my own projects in order to constantly iterate on my skills to become more skilled as a developer.
                            I'm also working on a few projects, namely a Spotify Statistics app using thier API, and also a <span id="highlight-name">Jobs Portal Tracker</span>, using Supabase as a serverless backend/database.
                        </span>

                        <span className="About-paragraph-text">
                            Ive also taken on a volunteer web developer role at <span id="highlight-name">FeedUsUp CIC</span>, a charity that has recently provided aid to Haiti as well as helped people deal with loneliness in the UK.
                        </span>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMe;