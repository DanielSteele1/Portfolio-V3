import { TypeAnimation } from 'react-type-animation';
import { LuGithub } from "react-icons/lu";
import { MdEmail } from 'react-icons/md';
import { HiDownload } from "react-icons/hi";
import { FaBookOpen, FaCity, FaCode, FaLinkedin } from "react-icons/fa6";
import GitHubCalendar from 'react-github-calendar';

import './react-github-calendar.css';

import "/node_modules/flag-icons/css/flag-icons.min.css";
import { IoMdPin } from 'react-icons/io';
import Statistics from './Stats.tsx';
import Experience from './Experience.tsx';

type Props = {

    handleDownloadAndView: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    theme: boolean;
};

const Dashboard = ({ handleDownloadAndView }: Props) => {

    return (

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

                    <a id="social-link" href="https://www.linkedin.com/in/daniel-steele1" target="_blank" referrerPolicy='no-referrer'>
                        <FaLinkedin />
                        <span> Linkedin </span>
                    </a>

                    <a id="social-link" href="https://github.com/DanielSteele1" target="_blank" referrerPolicy='no-referrer'>
                        <LuGithub />
                        <span> Github </span>
                    </a>

                    <a id="social-link" href="mailto:dsteele1906@gmail.com" target="_blank" referrerPolicy='no-referrer'>
                        <MdEmail />
                        <span> Email </span>
                    </a>
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
                    </div>

                    <div className="resume-reduced-container">
                        <div className="socials-reduced">

                            <a id="social-link" href="https://www.linkedin.com/in/daniel-steele1" target="_blank" referrerPolicy='no-referrer'>
                                <FaLinkedin />
                                <span> Linkedin </span>
                            </a>

                            <a id="social-link" href="https://github.com/DanielSteele1" target="_blank" referrerPolicy='no-referrer'>
                                <LuGithub />
                                <span> Github </span>
                            </a>

                            <a id="social-link" href="mailto:dsteele1906@gmail.com" target="_blank" referrerPolicy='no-referrer'>
                                <MdEmail />
                                <span> Email </span>
                            </a>

                            <a id="social-link" href="/Daniel_Steele_Frontend_Developer_CV.pdf" onClick={handleDownloadAndView}>
                                <HiDownload />
                                <span> Resume </span>
                            </a>
                        </div>
                    </div>


                    {/* <div className="landing-paragraph">
                        Welcome! I'm Daniel Steele, a junior frontend / full-stack developer based in the UK.
                    </div> */}

                    <div className="landing-status-container">
                        <div className="landing-status">
                            <span id="status-text"> <FaCity /> Open to opportunities in the UK  </span>
                            <span id="status-text"> <FaBookOpen /> Experimenting with: MantineUI </span>

                            <a id="status-text-a" href="https://reddit-statistics-app.vercel.app/dashboard"> <FaCode style={{fontSize: '25px'}}/> Current Project: Spotify Charts App </a>
                        </div>
                    </div>

                    {/* <section className="landing-socials">
                        <div id="landing-social"> <LuGithub /> Github  </div>
                        <div id="landing-social"> <FaLinkedin /> Linkedin  </div>
                        <div id="landing-social"> <MdEmail /> Email  </div>
                    </section> */}



                    <div className="landing-stats">
                        <Statistics />
                    </div>

                    <div className="landing-grid">
                        <div id="commit-graph">
                            <GitHubCalendar
                                username="danielsteele1"
                                errorMessage="Could not show Graph right now. Please Reload :)"
                                loading={false}
                                hideColorLegend={true}
                            />
                        </div>
                    </div>

                    <Experience />

                </div>

                <div className="dashboard">

                    <div className="dashboard-component component-about" onClick={() => window.location.href = '/About'}>
                        <div className="component-about">
                            <div className="component-info" id="component-info-about">
                                <span className="component-title"> About me 💻 </span>
                                <span className="component-description"> Find out more about me. </span>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-component component-projects" onClick={() => window.location.href = '/Projects'}>
                        <div className="component-info">
                            <span className="component-title">
                                Projects 🍵</span>
                            <span className="component-description"> My collection of personal web projects. </span>
                        </div>
                    </div>

                    <div className="dashboard-component component-skills" id="skills-bg" onClick={() => window.location.href = '/Skills'}>

                        <div className="component-info">
                            <span className="component-title"> Skills 🏗️ </span>
                            <span className="component-description"> A list of technologies I'm skilled with. </span>
                        </div>

                    </div>

                    <div className="dashboard-component component-blog" onClick={() => window.location.href = '/Blog'}>
                        <div className="component-info">
                            <span className="component-title"> Blog 📰 </span>
                            <span className="component-description"> Write-ups of my projects & more. </span>
                        </div>
                    </div>

                    <div className="dashboard-component component-links" onClick={() => window.location.href = '/Links'}>
                        <div className="component-links">
                            <div className="component-info" id="component-info-links">
                                <span className="component-title"> Useful Links 📌 </span>
                                <span className="component-description"> Bookmarks & useful repositories for devs. </span>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-component component-none" onClick={() => window.location.href = 'mailto:Dsteele1906@gmail.com'}>
                        <div className="component-links">
                            <div className="component-info" id="component-info-links">
                                <span className="none-title"> Interested? </span>
                                <span className="none-desc"> Click here to shoot me an email. </span>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Dashboard;

