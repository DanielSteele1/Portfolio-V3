import React from 'react';

import { Timeline, Text, MantineProvider, MantineThemeOverride } from '@mantine/core';import '@mantine/core/styles.css';import './Experience.css';
import { FaBriefcase, FaCode, FaGraduationCap } from 'react-icons/fa6';


interface ExperienceItem {
    id: string;
    company?: string[];
    position?: string[];
    picture?: string[];
    duration?: string[];
    description?: string[];
    technologies?: string[];
}

const Experience: React.FC = () => {
    const experiences: ExperienceItem[] = [
        {
            id: '1',
            company: ['Computer Science Graduate (BSc Hons)', 'Meterbolic Limited', 'Independent Web Developer'],
            position: ['University of Plymouth', 'Software Engineering Intern', 'Newton Abbot, Devon, UK'],
            picture: [''],
            duration: ['Sept 2021 - July 2024', 'December 2025 - Present', 'September 2024 - Present'],
            description: [
                'Graduated with valuable knowledge of programming fundimentals, learning JavaScript, C++, C# and much more.',
                'Helping to create a Dashboard application and Mobile app in React/React Native.',
                'Developing my own web applications in ReactJS and TypeScript to enhance my skillset.'
            ],
        },
    ];

    const theme: MantineThemeOverride = {
        components: {
            Timeline: {
                defaultProps: {},
            },
            Text: {
                defaultProps: {},
            },
        },
    };

    return (
        <MantineProvider theme={theme}>

            <section className="experience">
                <span className="title"> Experience </span>

                <div className="experience-list">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="experience-item">
                            <Timeline active={2} bulletSize={30} lineWidth={2} color={'#a871f1'}>
                                <Timeline.Item id="company" bullet={<FaGraduationCap size={18} />} title={exp.company?.[0]}>
                                    <Text id="position" size="lg"> {exp.position?.[0]} </Text>
                                    <Text id="description" size="xs" mt={5}>{exp.description?.[0]}</Text>
                                    <Text id="duration" size="xs" mt={5}>{exp.duration?.[0]}</Text>
                                </Timeline.Item>

                                <Timeline.Item id="company" bullet={<FaBriefcase size={18} />} title={exp.company?.[1]}>
                                    <Text id="position" size="lg"> {exp.position?.[1]} </Text>
                                    <Text id="description" size="xs" mt={5}>{exp.description?.[1]}</Text>
                                    <Text id="duration" size="xs" mt={5}>{exp.duration?.[1]}</Text>
                                </Timeline.Item>

                                <Timeline.Item id="company" bullet={<FaCode size={18} />} title={exp.company?.[2]}>
                                    <Text id="position" size="lg"> {exp.position?.[2]} </Text>
                                    <Text id="description" size="xs" mt={5}>{exp.description?.[2]}</Text>
                                    <Text id="duration" size="xs" mt={5}>{exp.duration?.[2]}</Text>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                    ))}

                </div>
            </section>
        </MantineProvider>
    );
};

export default Experience;