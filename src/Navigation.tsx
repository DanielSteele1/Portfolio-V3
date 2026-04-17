import { useEffect, useState } from 'react';

import 'react-tooltip/dist/react-tooltip.css'
import { HiDownload } from "react-icons/hi";
import Hamburger from 'hamburger-react';

import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { Link } from 'react-router-dom';

type props = {
    handleDownloadAndView: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    handleThemeButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isThemeOn: boolean;
};

function Navigation({ isThemeOn, handleDownloadAndView, handleThemeButton }: props) {

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

                        <span data-tooltip-id="tooltip-1" className="nav-title">
                            <Link to="/Blog">
                                Blog
                            </Link>
                        </span>

                        <button className="resume" onClick={handleDownloadAndView}>
                            <a href="/Daniel_Steele_Frontend_Developer_CV.pdf">

                                <HiDownload style={{
                                    verticalAlign: 'middle',
                                    marginRight: '5px',
                                    fontSize: '20px',
                                    fontWeight: '900',
                                }} />
                                Resume
                            </a>

                        </button>

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
                                    Home
                                </Link>
                            </span>

                            <span className="nav-title">
                                <Link to="/About" onClick={() => { setOpen(false) }}>
                                    About
                                </Link>
                            </span>

                            <span className="nav-title" id="nav-projects">
                                <Link to="/Projects" onClick={() => { setOpen(false) }}>
                                    Projects
                                </Link>
                            </span>

                            <span className="nav-title">
                                <Link to="/Blog" onClick={() => { setOpen(false) }}>
                                    Blog
                                </Link>
                            </span>

                            <span className="nav-title">
                                <Link to="/Links" onClick={() => { setOpen(false) }}>
                                    Developer Links 
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