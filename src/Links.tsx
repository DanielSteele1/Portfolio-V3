
import Breadcrumbs from './Breadcrumbs';

import { Accordion } from '@mantine/core';
import linksData from './Links.json';

interface LinkItem { 
    title: string;
    url: string;
}

interface Group {

    category: string;
    links: LinkItem[];
}

function Links(){

   const links = linksData as Group[];

   const linkGroups = links.map((group, index) => (

    <Accordion.Item key={index} value={group.category}>
    <Accordion.Control className="links-grid-title">{group.category}</Accordion.Control>

        {group.links.map((link, index) => (

        <Accordion.Panel key={index} className="link">
            <a href={link.url}> 
        {link.title}
        
         </a>
       </Accordion.Panel>
     
      ))}

    </Accordion.Item>

   ));

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

                <section className="links-group">
                    <h2 className="links-grid-title">Useful Links</h2>

                        <Accordion 
                        order={3} 
                        variant="separated"
                        defaultValue={links[0]?.category}
                        chevronIconSize={22}>
                        {linkGroups}
                        </Accordion>

                </section>

            
            </div>
        </section>
    )
}

export default Links;