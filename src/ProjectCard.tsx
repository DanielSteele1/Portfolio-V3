import { FaGithub } from "react-icons/fa6";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router";

export interface ProjectCardProps {

    title: string;
    description: string;
    src: string;
    tags: TagsProps[];
    link: string;
    date: string;
    github: string;
    stars: number;
 }

interface TagsProps {
    icon: string;
    name: string;
}

function ProjectCard({
    title, 
    description,
    src,
    tags,
    link, 
    github

}:ProjectCardProps) {

    return (

        <div className="project-card">
            <div className="project-media">
                <div className="project-overlay">
                    <span className="project-title">
                        {title}
                    </span>

                    <div className="project-buttons">
                        <div className="project-button">
                            <Link className="live-button" to={link} target="_blank" rel="noopener noreferrer">
                                <GoLinkExternal style={{ fontSize: "25px" }} />
                                <span className="button-text"> </span>
                            </Link>
                        </div>

                        <div className="project-button" id="github-button">
                            <Link className="github-button" to={github} target="_blank" rel="noopener noreferrer">
                                <FaGithub style={{ fontSize: "25px" }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <a className="project-image-link" href={link} target="_blank" rel="noopener noreferrer">
                    <div className="project-image">
                        <img src={src} alt={title} loading="lazy" />
                    </div>
                </a>
            </div>

               <div className="project-date"> {title} </div>
            
                <div className="project-tags">
                    {tags.map((tag, index) => (

                    <span key={index} className="tag"> 
                     {tag.name}
                    </span>

                    ))}
                </div>

             <div className="project-description">
                    {description}
             </div>

        </div>
    )
}

export default ProjectCard;
