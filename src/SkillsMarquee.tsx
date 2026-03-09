
import { FaFigma, FaNodeJs, FaReact } from 'react-icons/fa6';
import './skillsMarquee.css'
import { SiCplusplus, SiExpress, SiJavascript, SiMantine, SiMongodb, SiTypescript, SiVite } from 'react-icons/si';
import { LuFramer } from 'react-icons/lu';

function SkillsMarquee() {

    const LogoArray = [
        { id: 1, item: <FaReact /> },
        { id: 2, item: <SiTypescript /> },
        { id: 3, item: <FaNodeJs /> },
        { id: 4, item: <SiJavascript /> },
        { id: 5, item: <SiMantine /> },
        { id: 6, item: <SiMongodb /> },
        { id: 7, item: <SiExpress /> },
        { id: 8, item: <SiVite /> },
        { id: 9, item: <SiCplusplus /> },
        { id: 10, item: <FaFigma /> },
        { id: 11, item: <LuFramer /> },
    ]

    return (
        <section className="skills-marquee-container">
            <div className="skills-marquee">
                {LogoArray.map((obj, index) => (

                    <div
                        id="skill-logo"
                        key={index}
                    >
                        {obj.item}
                    </div>
                ))}
                {LogoArray.map((obj, index) => (

                    <div
                        id="skill-logo"
                        key={index}
                    >
                        {obj.item}
                    </div>
                ))}
            </div>
        </section>
    )
}
export default SkillsMarquee;
