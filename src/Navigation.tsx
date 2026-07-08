import { useEffect, useState } from 'react';

import 'react-tooltip/dist/react-tooltip.css'
import Hamburger from 'hamburger-react';

import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdAccountCircle } from 'react-icons/md';
import { GoPin, GoProject } from 'react-icons/go';
import { FaBook } from 'react-icons/fa';
import { TbBuilding } from 'react-icons/tb';

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
                    <span className="nav-title">
                        <a href="/">
                            <div className="logo" id="gradient"> Daniel Steele </div>
                        </a>
                    </span>
                </div>

                <div className="nav-item">
                    <div className="nav-menu">

                        <span className="nav-title">
                            <Link to="/">
                                Home
                            </Link>
                        </span>

                        <span className="nav-title" id="nav-projects">
                            <Link to="/Projects">
                                Projects
                            </Link>
                        </span>

                        <span className="nav-title">
                            <Link to="/About">
                                About
                            </Link>
                        </span>


                        <span className="nav-title">
                            <Link to="/Links">
                                Links
                            </Link>
                        </span>

                        <span data-tooltip-id="tooltip-1" className="nav-title">
                            <Link to="/Blog">
                                Blog
                            </Link>
                        </span>

                        <span className="nav-title">
                            <Link to="/Experience">
                                Resume
                            </Link>
                        </span>

                        <button className="theme-button" onClick={handleThemeButton}>
                            {isThemeOn ?

                                <IoIosMoon style={{
                                    fontSize: '23px',
                                }} /> :

                                <IoIosSunny style={{
                                    fontSize: '23px',
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
                                <Link to="/" onClick={() => { setOpen(false) }}>
                                    <HiHome />  Home
                                </Link>
                            </span>

                            <span className="nav-title">
                                <Link to="/About" onClick={() => { setOpen(false) }}>
                                    <MdAccountCircle />  About
                                </Link>
                            </span>

                            <span className="nav-title" id="nav-projects">
                                <Link to="/Projects" onClick={() => { setOpen(false) }}>
                                    <GoProject /> Projects
                                </Link>
                            </span>

                            <span className="nav-title">
                                <Link to="/Blog" onClick={() => { setOpen(false) }}>
                                    <FaBook /> Blog
                                </Link>
                            </span>

                            <span className="nav-title">
                                <Link to="/Experience" onClick={() => { setOpen(false) }}>
                                    <TbBuilding />  Experience
                                </Link>
                            </span>


                            <span className="nav-title">
                                <Link to="/Links" onClick={() => { setOpen(false) }}>
                                    <GoPin />  Developer Links
                                </Link>
                            </span>

                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navigation;