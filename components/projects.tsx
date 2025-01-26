"use client"

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';


export default function Projects() {
   const {ref} = useSectionInView("Projects", 0.5);

    return (
        <section  ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>My projects

            </SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}
function useSectionInView(arg0: string, arg1: number): { ref: any; } {
    throw new Error('Function not implemented.');
}
