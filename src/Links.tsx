import { FaBookOpen, FaGithub, FaReact } from "react-icons/fa6";
import { LuChartBar, LuPaintbrush } from "react-icons/lu";
import { SiChakraui, SiFramer, SiMantine, SiMui, SiNextdotjs, SiReact, SiTypescript, SiVite } from "react-icons/si";
import { TbBread } from "react-icons/tb";

import Breadcrumbs from './Breadcrumbs';

function Links() {

    return (
        <section className="links">

            <div className="page-nav">

                <div className="breadcrumbs">
                    <Breadcrumbs />
                </div>

            </div>

            <div className="section-heading">
                Useful <div id="highlight-name">{`{ Links }`}</div> 
            </div>

            <div className="links-sub-heading">
                A list of curated developer tools, libraries and repositories.
                Contains anything from tools & documentation, to handy lists for project inspiration.
            </div>

            <div className="links-backdrop">

                <span className="links-grid-title"> Inspiration Repositories</span>
                <div className="links-grid">

                    <a href="https://github.com/">
                        <div className="link">
                            <FaGithub /> Github
                        </div>
                    </a>
                    <a href="https://github.com/DanielSteele1/developer-portfolios">
                        <div className="link">
                            <FaGithub /> Emma Bostian's Developer Portfolio list
                        </div>
                    </a>

                    <a href="https://github.com/Divide-By-0/ideas-for-projects-people-would-use">
                        <div className="link">
                            <FaGithub /> "Ideas-for-projects-people-would-use" github list
                        </div>
                    </a>
                </div>

                <span className="links-grid-title"> Documentation Websites </span>
                <div className="links-grid">

                    <a href="https://react.dev/">

                        <div className="link">
                            <FaReact /> React Home Page
                        </div>
                    </a>

                    <a href="https://react.dev/learn/creating-a-react-app#react-router-v7">
                        <div className="link">
                            <SiReact /> React Router
                        </div>
                    </a>

                    <a href="https://vite.dev/">

                        <div className="link">
                            <SiVite /> Vite Home Page
                        </div>
                    </a>


                    <a href="https://nextjs.org/">

                        <div className="link">
                            <SiNextdotjs /> NextJS Home Page
                        </div>
                    </a>


                    <a href="https://www.typescriptlang.org/">

                        <div className="link">
                            <SiTypescript /> TypeScript Home Page
                        </div>
                    </a>

                    <a href="https://gsap.com/">

                        <div className="link">
                            <LuPaintbrush /> GSAP Home Page
                        </div>
                    </a>

                    <a href="https://motion.dev/">
                        <div className="link">
                            <SiFramer /> Framer Motion Home Page
                        </div>
                    </a>

                </div>

                <span className="links-grid-title"> Useful Libraries & Resources </span>
                <div className="links-grid">

                    <a href="https://ui.shadcn.com/">

                        <div className="link">
                            <SiVite /> ShadCN Home Page
                        </div>
                    </a>


                    <a href="https://mantine.dev/">

                        <div className="link">
                            <SiMantine /> Mantine Home page
                        </div>
                    </a>

                    <a href="https://chakra-ui.com/">
                        <div className="link">
                            <SiChakraui /> ChakraUI Home Page
                        </div>
                    </a>


                    <a href="https://mui.com/">

                        <div className="link">
                            <SiMui /> MUI Home page
                        </div>
                    </a>

                    <a href="https://reactbits.dev/">

                        <div className="link">
                            <FaBookOpen /> React-Bits (Animation Lib)
                        </div>
                    </a>

                    <a href="https://d3js.org/">
                        <div className="link">

                            <LuChartBar /> D3 Charts (Charts Lib)
                        </div>
                    </a>

                    <a href="https://dndkit.com/">
                        <div className="link">
                            <FaBookOpen /> DnD-Kit (Drag and Drop Lib)
                        </div>
                    </a>

                    <a href="https://github.com/apvarun/toastify-js">
                        <div className="link">
                            <TbBread /> ToastifyJS (Highly Customisable Toast Lib)
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Links;