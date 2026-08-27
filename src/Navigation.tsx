import { useEffect, useState } from 'react';

import 'react-tooltip/dist/react-tooltip.css'
import Hamburger from 'hamburger-react';

import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import {  HiDocument, HiHome } from 'react-icons/hi';
import { MdAccountCircle } from 'react-icons/md';
import {  GoHome, GoPin, GoProject } from 'react-icons/go';
import { FaBook} from 'react-icons/fa';
import { TbBuilding, TbTools } from 'react-icons/tb';
import { LuLink, LuNotebook } from 'react-icons/lu';

type props = {
    handleThemeButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isThemeOn: boolean;
};

function Navigation({ isThemeOn, handleThemeButton }: props) {

    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, []);

    return (

        <div className="nav-container">
            <div className={`navigation ${scrolled ? "scrolled" : ""}`}>
                <div className="nav-item">
                    <span className="nav-logo">
                        <a href="/">
                            <div className="logo" id="gradient"> Daniel Steele </div>
                        </a>
                    </span>
                </div>

                <div className="nav-item">
                    <div className="nav-menu">

                        <span className="nav-title">
                            <NavLink to="/" end className="expandable-box">
                                <GoHome />
                                <div className='sliding-text'>Home</div>
                            </NavLink>
                        </span>

                        <span className="nav-title" id="nav-projects">
                            <NavLink to="/Projects" className="expandable-box">
                                <TbTools />
                                <div className="sliding-text">Projects</div>
                            </NavLink>
                        </span>

                        <span className="nav-title">
                            <NavLink to="/About" className="expandable-box">
                                <MdAccountCircle />
                                <div className="sliding-text"> About </div>
                            </NavLink>
                        </span>


                        <span className="nav-title">
                            <NavLink to="/Links" className="expandable-box">
                                <LuLink />
                                <div className="sliding-text"> Links </div>
                            </NavLink>
                        </span>

                        <span data-tooltip-id="tooltip-1" className="nav-title">
                            <NavLink to="/Blog" className="expandable-box">
                                <LuNotebook />
                                <div className="sliding-text"> Blog </div>
                            </NavLink>
                        </span>

                        <span className="nav-title">
                            <NavLink to="/Experience" className="expandable-box">
                                <HiDocument />
                                <div className="sliding-text"> Resume </div>
                            </NavLink>
                        </span>

                     <button className="theme-button" onClick={handleThemeButton}>
                        {isThemeOn ?

                            <IoIosMoon style={{
                            }} /> :

                            <IoIosSunny style={{
                            }} />
                        }

                    </button>

                    </div>


                </div>

                <div className="nav-buttons">

                    <button className="theme-button-reduced" onClick={handleThemeButton}>
                        {isThemeOn ?

                            <IoIosMoon style={{
                            }} /> :

                            <IoIosSunny style={{
                            }} />
                        }

                    </button>

                    <div className="nav-hamburger">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>

                </div>

                {isOpen && (

                    <div className="nav-menu-mobile">
                        <div className="nav-backing-mobile">

                            <span className="nav-title">
                                <NavLink to="/" end onClick={() => { setOpen(false) }}>
                                    <HiHome />  Home
                                </NavLink>
                            </span>

                            <span className="nav-title">
                                <NavLink to="/About" onClick={() => { setOpen(false) }}>
                                    <MdAccountCircle />  About
                                </NavLink>
                            </span>

                            <span className="nav-title" id="nav-projects">
                                <NavLink to="/Projects" onClick={() => { setOpen(false) }}>
                                    <GoProject /> Projects
                                </NavLink>
                            </span>

                            <span className="nav-title">
                                <NavLink to="/Blog" onClick={() => { setOpen(false) }}>
                                    <FaBook /> Blog
                                </NavLink>
                            </span>

                            <span className="nav-title">
                                <NavLink to="/Experience" onClick={() => { setOpen(false) }}>
                                    <TbBuilding />  Experience
                                </NavLink>
                            </span>


                            <span className="nav-title">
                                <NavLink to="/Links" onClick={() => { setOpen(false) }}>
                                    <GoPin />  Developer Links
                                </NavLink>
                            </span>

                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navigation;