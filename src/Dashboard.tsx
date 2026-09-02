import { TypeAnimation } from 'react-type-animation';
import { LuGithub } from "react-icons/lu";
import { MdEmail } from 'react-icons/md';
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import './react-github-calendar.css';
import './React-Bits/GradientText';


import "/node_modules/flag-icons/css/flag-icons.min.css";
import { IoMdPin } from 'react-icons/io';

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@mantine/core';
import FoldText from './React-Bits/FoldText';
import AccordionGallery from './React-Bits/Accordion';
import './React-Bits/Accordion.css';

type Props = {
    handleDownloadAndView: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

const Dashboard = ({ handleDownloadAndView }: Props) => {

    const items = [
  { image: '/public/Jobs-Portal.png', label: 'Personal Projects', link: '/Projects' },
  { image: '/public/Picture of the Bay -website.jpg', label: 'About me', link: '/About' },
  { image: '/public/blog.png', label: 'Blog', link: '/Blog' },
  { image: 'public/Plymouth_Hoe.jpg', label: 'Experience', link: '/Experience' },
];

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

                                
                            <FoldText
                                className="gradient-text"
                                text="Hey, i'm Daniel Steele"
                                splitBy="char"
                                hinge="top"
                                trigger="mount"
                                duration={0.65}
                                stagger={0.045}
                                ease="power3.out"
                                perspective={700}
                                creaseShading={0.55}
                                fontSize={80}
                                fontWeight={800}
                                color="#834fff"
                            /> 

                            <TypeAnimation
                                className='type-animation'
                                sequence={[
                                    `Junior TypeScript Developer`,
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

                            <div className="cta-button-container">
                                <Button className="cta-button" id="resume-button"
                                    onClick={handleDownloadAndView}
                                >
                                    <HiDownload /> Download Resume
                                </Button>

                                <Link to="https://www.linkedin.com/in/daniel-steele1/" target="_blank" referrerPolicy='no-referrer'>

                                    <Button className="cta-button">
                                        <FaLinkedin />
                                    </Button>
                                </Link>


                                <Link to="https://github.com/DanielSteele1" target="_blank" referrerPolicy='no-referrer'>

                                    <Button className="cta-button">
                                        <FaGithub />
                                    </Button>
                                </Link>

                            </div>
                        </div>

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
                    </div>
                </div>


                <div className="landing-sections">
                    <div className="landing-heading"> Welcome! Feel free to explore...</div>

                    {/* <Link to="/Projects" className='landing-section'>
                        <span className="landing-section-title"> Projects  </span>
                        <span className="landing-section-desc"> A collection of personal portfolio projects. </span>
                    </Link>
                 
                    <Link to="/About" className='landing-section'>
                        <span className="landing-section-title"> About me </span>
                        <span className="landing-section-desc"> A bit about who I am and my journey. </span>
                    </Link>

                    <Link to="/Blog" className='landing-section'>
                        <span className="landing-section-title"> My Blog </span>
                        <span className="landing-section-desc"> Contains writeups on recent projects + </span>
                    </Link>

                    <Link to="/Experience" className='landing-section'>
                        <span className="landing-section-title"> Experience </span>
                        <span className="landing-section-desc"> A List of my professional experiences. </span>
                    </Link> */}

            <AccordionGallery
            items={items}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            grayscale={false}
            accentColor="#ffffff"
            overlayColor="#060010"
            textColor="#ffffff"
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={0}
            stagger={0.06}
            height={550}
            gap={30}
            radius={16}
            orientation="vertical"
            />

            </div> 



            </div>
        </motion.div >
    )
}

export default Dashboard;

