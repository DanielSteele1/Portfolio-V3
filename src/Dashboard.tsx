import { TypeAnimation } from 'react-type-animation';
import { LuGithub } from "react-icons/lu";
import { MdEmail } from 'react-icons/md';
import { HiDownload } from "react-icons/hi";
import { FaBookOpen, FaCity, FaCode, FaLinkedin } from "react-icons/fa6";

import './react-github-calendar.css';

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { IoMdPin } from 'react-icons/io';
import Statistics from './Stats.tsx';

import { useState } from 'react';
import GithubGraph from './GithubGraph.tsx';
import SkillsMarquee from './SkillsMarquee.tsx';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@mantine/core';

type Props = {

    handleDownloadAndView: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    isThemeOn: boolean;
};

const Dashboard = ({ handleDownloadAndView, isThemeOn }: Props) => {

    const [loading, setLoading] = useState(true);

    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="main-container">

                <div className="socials">

                    <div className="socials-top">
                        <img src="/Website_Pic.JPG" alt="Daniel Steele" />
                    </div>

                    <div className="socials-bottom">
                        <span className="dashboard-title"> Socials </span>

                        <div id="social-link">
                            <IoMdPin />
                            <span id="location"> 🇬🇧 Devon, United Kingdom  </span>
                        </div>

                        <Link id="social-link" to="https://www.linkedin.com/in/daniel-steele1" target="_blank" referrerPolicy='no-referrer'>
                            <FaLinkedin />
                            <span> Linkedin </span>
                        </Link>

                        <Link id="social-link" to="https://github.com/DanielSteele1" target="_blank" referrerPolicy='no-referrer'>
                            <LuGithub />
                            <span> Github </span>
                        </Link>

                        <Link id="social-link" to="mailto:dsteele1906@gmail.com" target="_blank" referrerPolicy='no-referrer'>
                            <MdEmail />
                            <span> Email </span>
                        </Link>
                    </div>
                </div>

                <div className="greeting">
                    <div className="landing-area">
                        <div className="landing-greeting">
                            <span className="landing-header">
                                Hey, I'm <div id="highlight-name"> Daniel Steele </div>
                            </span>
                            <TypeAnimation
                                className='type-animation'
                                sequence={[
                                    'Junior TypeScript Developer',
                                    2000,
                                    'Junior React Developer',
                                    2000,
                                    'Tech Enthusiast',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={10}
                                repeat={Infinity}
                            />
                            <div className="resume-button-container">
                                <Button className="resume-button"
                                onClick={handleDownloadAndView}
                                >
                                    <HiDownload /> Download Resume
                                </Button>
                            </div>
                        </div>

                        <SkillsMarquee />

                        <div className="resume-reduced-container">
                            <div className="socials-reduced">

                                <Link id="social-link" to="https://www.linkedin.com/in/daniel-steele1" target="_blank" referrerPolicy='no-referrer'>
                                    <FaLinkedin />
                                    <span> Linkedin </span>
                                </Link>

                                <Link id="social-link" to="https://github.com/DanielSteele1" target="_blank" referrerPolicy='no-referrer'>
                                    <LuGithub />
                                    <span> Github </span>
                                </Link>

                                <Link id="social-link" to="mailto:dsteele1906@gmail.com" target="_blank" referrerPolicy='no-referrer'>
                                    <MdEmail />
                                    <span> Email </span>
                                </Link>

                                <a id="social-link" href="/Daniel_Steele_Frontend_Developer_CV.pdf" onClick={handleDownloadAndView}>
                                    <HiDownload />
                                    <span> Resume </span>
                                </a>
                            </div>
                        </div>


                        <div className="landing-status-container">
                            <div className="landing-status">
                                <span id="status-text"> <FaCity /> Open to opportunities in the UK  </span>
                                <span id="status-text"> <FaBookOpen /> Experimenting with: MantineUI </span>

                                <Link to="https://job-board-murex-eight.vercel.app" id="status-text-a"> <FaCode style={{ fontSize: '25px' }} /> Current Project: Job Portal App</Link>
                            </div>
                        </div>

                        <div className="landing-stats">
                            <Statistics />
                        </div>

                        <GithubGraph isThemeOn={isThemeOn} loading={loading} setLoading={setLoading} />

                    </div>

                    <div className="dashboard">

                        <Link className="dashboard-component component-about" to="/About">
                            <div className="component-about">
                                <div className="component-info" id="component-info-about">
                                    <span className="component-title"> About me 💻 </span>
                                    <span className="component-description"> Find out more about me. </span>
                                </div>
                            </div>
                        </Link>

                        <Link className="dashboard-component component-projects" to="/Projects">
                            <div className="component-info">
                                <span className="component-title">
                                    Projects 🍵</span>
                                <span className="component-description"> My collection of personal web projects. </span>
                            </div>
                        </Link>

                        <Link className="dashboard-component component-skills" id="skills-bg" to="/Experience" >

                            <div className="component-info">
                                <span className="component-title"> Experience 🏗️ </span>
                                <span className="component-description"> Professional Experience. </span>
                            </div>

                        </Link>

                        <Link className="dashboard-component component-blog" to="/Blog">
                            <div className="component-info">
                                <span className="component-title"> Blog 📰 </span>
                                <span className="component-description"> Write-ups of my projects & more. </span>
                            </div>
                        </Link>

                        <Link className="dashboard-component component-links" to="/Links">
                            <div className="component-links">
                                <div className="component-info" id="component-info-links">
                                    <span className="component-title"> Useful Links 📌 </span>
                                    <span className="component-description"> Bookmarks & useful repositories for devs. </span>
                                </div>
                            </div>
                        </Link>

                        <Link className="dashboard-component component-none" to="mailto:Dsteele1906@gmail.com">
                            <div className="component-links">
                                <div className="component-info" id="component-info-links">
                                    <span className="none-title"> Interested? </span>
                                    <span className="none-desc"> Click here to shoot me an email. </span>
                                </div>
                            </div>
                        </Link>
                    </div>




                </div>
            </div >
        </motion.div>
    )
}

export default Dashboard;

