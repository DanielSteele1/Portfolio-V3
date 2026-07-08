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
import GradientText from './React-Bits/GradientText';

type Props = {
    handleDownloadAndView: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
};

const Dashboard = ({ handleDownloadAndView }: Props) => {

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
                                Hey, I'm
                                <GradientText
                                    colors={["#5227FF", "#d85fd4"]}
                                    animationSpeed={3.0}
                                    showBorder={false}
                                    className="gradient-text"
                                >
                                    {'{ Daniel Steele }'}
                                </GradientText>
                            </span>

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
            </div >
        </motion.div >
    )
}

export default Dashboard;

