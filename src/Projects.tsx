import 'react-tooltip/dist/react-tooltip.css'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { motion } from "motion/react"
import Breadcrumbs from './Breadcrumbs';

import type { ProjectCardProps } from './ProjectCard';
import ProjectCard from './ProjectCard';
import projectsData from './projects.json';
import { useState } from 'react';
import { Select } from '@mantine/core';

console.table(projectsData);
const projects = projectsData as ProjectCardProps[];

function Projects() {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDate, setProjectDate] = useState('Pick a date');

    const filteredProjects = projects.filter((project => {

        // get current date, project date, and - both for the difference. 
        // calculate month, year and 6month filters.

       const CurrentDate = Date.now();
       const ProjectDate = new Date(project.date);
        
       const ProjectAge = CurrentDate - ProjectDate.getTime();

       const Month = 30 * 24 * 60 * 60 * 1000;
       const SixMonth = 182.5 * 24 * 60 * 60 * 1000;
       const Year = 365 * 24 * 60 * 60 * 1000; 

        const tagsFilter = project.tags.some((tag) => tag.name.toLowerCase().includes(searchTerm.toLowerCase()));

        const nameFilter = project.title.toLowerCase().includes(searchTerm.toLowerCase());

        let dateFilter = true;
          
            if(selectedDate === 'In the last Month')
            { 
               dateFilter = ProjectAge <= Month;    
            }
            
            if(selectedDate === 'In the last 6 Months')
            {
                dateFilter = ProjectAge <= SixMonth;
            }

            if(selectedDate === 'In the last Year')
            {
                dateFilter = ProjectAge <= Year;
            }

            // join together name and tags filters into one searchbar. 
            // so bascially name filter OR tags filter.
            const searchFilter = nameFilter || tagsFilter; 

        return dateFilter && searchFilter;

    }))

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

                <div className="page-nav">
                    <div className="breadcrumbs">
                        <Breadcrumbs />
                    </div>
                </div>

                <span className="projects-heading">
                    My <div id="highlight-name"> {`{ Projects }`}</div> 🍵
                </span>

              <div className="project-main-container">

               <div className="project-search-container">
                <input 
                className="project-search" 
                placeholder="Search by project name or by technology..."
                value={searchTerm}
                onChange={((e) => setSearchTerm(e.target.value))}
                />

                <Select
                className="project-date-select"
                value={selectedDate}
                data={['In the last Month', 'In the last 6 Months', 'In the last Year', 'All Time']}
                placeholder="Pick a Date"
                onChange={(value) => setProjectDate(value ?? '')}
                
                />
               </div>

                    {filteredProjects.length === 0 ? (
                        <div className="no-results-projects"> 
                         No results found
                        </div>
                    ):(
                    <div className="project-container">

                    {filteredProjects.map((project) => (

                       <ProjectCard key={project.title} {...project}/>

                    ))}
                    
                    </div>
                )
            
                }

            </div>
            </motion.div>
        </>
    )
}

export default Projects;