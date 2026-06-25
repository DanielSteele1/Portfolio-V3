import '@mantine/core/styles.css';
import './Experience.css';
import { motion } from 'motion/react';
import { FaDownload } from 'react-icons/fa6';
import { LuGithub } from 'react-icons/lu';
import { SiLinkedin } from 'react-icons/si';
import { Link } from 'react-router-dom';

import { TooltipFloating } from '@mantine/core';

interface ExperienceProps {
    handleDownloadAndView: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const experiences = [

    {
        id: '0',
        image: 'FeedUsUpCIC.png',
        company: ['Feed Us Up CIC'],
        position: ['Web Application Developer'],
        duration: ['June 2026 - Present'],
        description: ['Working with the web development team to complete a full redesign and development of thier digital presence.'],
        link: 'https://feedusup.org.uk/',
    },

    {
        id: '1',
        image: 'DanielSteele.png',
        position: ['Independent Web Developer'],
        company: ['Newton Abbot, Devon, UK'],
        duration: ['Sept 2024 - Present'],
        description: ['Developing my own web applications in ReactJS and TypeScript to enhance my skillset.'],
        link: 'https://danielsteele.dev',

    },

    {
        id: '2',
        image: 'Meterbolic LTD.png',
        company: ['Meterbolic Limited'],
        position: ['Software Engineering Intern'],
        duration: ['Dec 2025 - Feb 2026'],
        description: ['Helped create a Dashboard application and Mobile app in React/React Native.'],
        link: 'https://meterbolic.com/',
    },

    {
        id: '3',
        image: 'Falcon_Digital.png',
        company: ['Falcon Digital'],
        position: ['Wordpress Design Internship'],
        duration: ['Feb 2023 -  April 2023'],
        description: ['Helped to deliver wordpress websites to multiple local clients around the south west.'],
        link: 'https://falcondigital.co.uk/',
    },

    {
        id: '4',
        image: 'UOP_logo.png',
        position: ['Computer Science Graduate (BSc Hons)'],
        company: ['University of Plymouth'],
        duration: ['Sept 2021 - July 2024'],
        description: ['Graduated with valuable knowledge of programming fundamentals, learning JavaScript, C++, C# and much more.'],
        link: 'https://www.plymouth.ac.uk/',

    },
];

function Experience({ handleDownloadAndView }: ExperienceProps) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >

            <section className="Experience">
                <div className="experience-list">
                    <div className="experience-top">
                        <span className="experience-heading"> Professional Experience 💼 </span>
                        <div className="container-div">
                            <button className="resume" onClick={handleDownloadAndView}><FaDownload /> Resume</button>
                            <Link className="github" to="https://github.com/danielsteele1"><LuGithub /> Github </Link>
                            <Link className="linkedin" to="https://www.linkedin.com/in/daniel-steele1/"> <SiLinkedin /> Linkedin</Link>
                        </div>
                    </div>

                    {experiences.map((exp) => (

                        <a href={exp.link} className="experience-item">

                            <TooltipFloating
                                key={exp.id}
                                label="View Company Website"
                                portalProps={{ target: document.body }}
                                id="experience-tooltip"
                            >
                                <div>
                                    <div className="company">
                                        <div id="position">{exp.position}</div>

                                        <img id="company-logo" src={exp.image} />
                                    </div>
                                    <div id="company-name">{exp.company}</div>
                                    <div id="duration">{exp.duration}</div>
                                    <div id="description">{exp.description}</div>
                                </div>

                            </TooltipFloating>
                        </a>
                    ))}
                </div>
            </section>
        </motion.div >

    );
};

export default Experience;