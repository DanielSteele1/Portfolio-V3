import React, { JSX } from 'react';
import { FaJs, FaNodeJs, FaReact, FaStar } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { SiCplusplus, SiCreatereactapp, SiMantine, SiMongodb, SiOpengl, SiReactrouter, SiSpotify, SiSupabase, SiTypescript, SiVite } from 'react-icons/si';
import { GoLinkExternal } from "react-icons/go";

import { Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

// added this interface so that now instead of each tag just being an SVG we can now make each other have it's own name,
// and then we can display each tag with it's own name this way.
interface Tag {
    icon: JSX.Element;
    name: string;
}

import { motion } from "motion/react"
import { Link } from 'react-router-dom';

interface ProjectCardProps {

    title: string;
    mediaType?: 'image' | 'youtube'; // either image, or youtube link.
    youtubeId?: string; // only required if mediaType is 'youtube'
    src: string;
    tags: Tag[];
    description: string;
    link: string;
    github: string;
    stars: number;
}

const Project_card: React.FC<ProjectCardProps> = ({ stars, title, src, tags, description, link, github }) => {

    return (

        <div className="project-card">
            <div className="project-image">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={title} loading="lazy" />
                </a>
            </div>

            <div className="project-information">
                <span className="project-title">
                    <div className="gradient"> {title}</div>
                </span>

                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="tag"
                            data-tooltip-id={`tags-tooltip-${index}`}
                            data-tooltip-content={tag.name}
                        >
                            {tag.icon}

                        </span>

                    ))}
                    {tags.map((_tag, index) => (
                        <ReactTooltip
                            key={index}
                            id={`tags-tooltip-${index}`}
                            place="bottom"
                            style={{
                                backgroundColor: '#0f152f',
                                color: '#d06cff',
                                fontFamily: 'figtree, sans-serif'
                            }}
                        />
                    ))}

                    <div className="stars"> <FaStar /> {stars} </div>

                </div>

                <div className="project-text">{description}</div>

            </div>
            <div className="project-buttons">
                <div className="project-button">
                    <Link className="live-button" to={link} target="_blank" rel="noopener noreferrer">
                        <GoLinkExternal style={{ fontSize: "20px" }} />
                        <span className="button-text">Live Project</span>
                    </Link>
                </div>

                <div className="project-button" id="github-button">
                    <Link className="github-button" to={github} target="_blank" rel="noopener noreferrer">
                        <LuGithub style={{ fontSize: "23px" }} />
                        <span className="button-text">Github</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

function Projects() {
    return (
        <>
            <motion.div
                className="projects"
                id="projects"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >

                <span className="projects-heading">
                    My <div id="highlight-name"> Projects </div> 🍵
                </span>

                <span className="project-sub-heading">
                    <span>
                        My collection of personal projects and apps, that I use to practice my skills and level up as a developer.
                    </span>
                </span>

                <div className="project-container">

                    <Project_card
                        title="Job's Portal"
                        description="An in progress frontend application to search, track and apply for jobs. 
                        Features a number of search filters including title, location, seniority, remote & pay.
                        It uses Adzuna's API to get job data, and includes ways for users to track application progress.
                        Planned to implement client side logins, stored with Supabase."
                        src="Job-board.png"
                        tags={[
                            { icon: <FaReact />, name: "React" },
                            { icon: <SiTypescript />, name: "TypeScript" },
                            { icon: <SiReactrouter />, name: "React-Router" },
                            { icon: <FaReact />, name: "Zustand (Global State managment)" },
                            { icon: <SiMantine />, name: "MantineUI" },
                            { icon: <SiSupabase />, name: "Supabase" },
                        ]}
                        link="https://job-board-murex-eight.vercel.app/"
                        github="https://github.com/DanielSteele1/JobBoard/tree/main/"
                        stars={2}
                    >
                    </Project_card>

                    <Project_card
                        title="Orbit - Productivity Tracker"
                        description="A Notes/productivity application, a blend of Trello and Google Keep. 
                        Features include the abillity to add/delete boards, and drag & drop to re-order tasks. Users can switch between two layouts.
                        Uses React-router for multi-board support, localStorage for persistance & react-toast for user feedback on operations."
                        src="Orbit_Kanban_App.png"
                        tags={[
                            { icon: <FaReact />, name: "React" },
                            { icon: <SiTypescript />, name: "TypeScript" },
                            { icon: <SiReactrouter />, name: "React-Router" },
                            { icon: <SiVite />, name: "Vite" },

                        ]}
                        link="https://trello-style-kanban-board-applicati-orcin.vercel.app"
                        github="https://github.com/DanielSteele1/Trello-Clone"
                        stars={5}

                    >

                    </Project_card>



                    <Project_card
                        title="Audio Stats - Spotify Dashboard"
                        description="A frontend web application intended to use Spotify's authentication and API service to get a users listening habits,
                        and to visualise that data using vis libraries. Uses React/TS on the frontend."
                        src="AudioStats_Real.png"
                        tags={[
                            { icon: <FaReact />, name: "React" },
                            { icon: <SiTypescript />, name: "TypeScript" },
                            { icon: <SiReactrouter />, name: "React-Router" },
                            { icon: <SiSpotify />, name: "Spotify's public API" },
                            { icon: <SiMantine />, name: "MantineUI" },
                            { icon: <SiVite />, name: "Vite" },
                        ]}
                        link="https://reddit-statistics-app.vercel.app/login"
                        github="https://github.com/DanielSteele1/Spotify-Statistics-Dashboard"
                        stars={3}

                    >

                    </Project_card>

                    <Project_card
                        title="FocusDev"
                        description="FocusDev is a utility app designed for developers.
                            It features a Notes app, Reusable code snippet feature, Calender, Github commit graph w/ stats, just to name a few.
                            Coded in JavaScript, React, Node.js & MongoDB. It also uses Bcrypt to securely store user data."
                        tags={[
                            { icon: <FaReact />, name: "React" },
                            { icon: <FaJs />, name: "JavaScript" },
                            { icon: <FaNodeJs />, name: "NodeJs" },
                            { icon: <SiMongodb />, name: "MongoDB" },
                            { icon: <SiCreatereactapp />, name: "Create-React-App" }
                        ]}
                        src="FocusDev.png"
                        link="https://focusdev.vercel.app"
                        github="https://github.com/DanielSteele1/FocusDev"
                        stars={5}

                    >


                    </Project_card>

                </div>

                <span className="projects-heading">
                    Older <div id="highlight-name"> Work </div>🏗️
                </span>
                <div className="project-container">

                    <Project_card title="SkyCompass"
                        description=" Skycompass is a web-based application that allows users to monitor up-to-date weather patterns across the globe. 
                        It utilises multiple APIs to create a dashboard displaying weather maps, as well a forecast page that predicts weather for up to 7 days. 
                        Using MongoDB & Bcrypt hashing for security, users can favourite locations for a more personalised experience."
                        src="SkyCompass.png"
                        tags={[

                            { icon: <FaReact />, name: "React" },
                            { icon: <FaJs />, name: "JavaScript" },
                            { icon: <FaNodeJs />, name: "NodeJs" },
                            { icon: <SiMongodb />, name: "MongoDB" },
                            { icon: <SiCreatereactapp />, name: "Create-React-App" },

                        ]}
                        link=""
                        github="https://github.com/DanielSteele1/SkyCompass"
                        stars={3}

                    >

                    </Project_card>

                    <Project_card title="EarthSim"
                        description="EarthSim is a project that I built in C++, using OpenGL and various libraries to create a 3D environment, with the goal of simulating our local system of planets, exposing me to core game development principles and GLSL. I have a web-based version planned."
                        src="EarthSim.png"
                        tags={[
                            { icon: <SiCplusplus />, name: "C++" },
                            { icon: <SiOpengl />, name: "OpenGL" }
                        ]}
                        link="https://github.com/DanielSteele1/EarthSim"
                        github="https://github.com/DanielSteele1/EarthSim"
                        stars={3}

                    >
                    </Project_card>
                </div>
            </motion.div>
        </>
    )
}

export default Projects;