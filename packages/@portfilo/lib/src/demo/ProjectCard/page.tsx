import React from 'react'
import './style.scss'
import PorjectCard, { ProjectCardData } from 'components/ProjectCard/component'

const projects: Record<string, ProjectCardData> = {
  QuickIn : {
    title: "QuickIn",
    description: "A simple check-in app that simplfies the gathering of contact tracing information.",
    subtitles: "React, Node.js"
  },
  UCLEI : {
    title: "UCLEI",
    description: "A stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works.",
    subtitles: "React, Node.js"
  },
  Shoppies : {
    title: "The Shoppies",
    description: "A web app that provides help to search movies via OMDB database and add to personal nomination list which can be export as a JSON file.",
    subtitles: "React"
  },
  LeetCode : {
    title: "LeetCode Solutions",
    description: "A Record of My Problem Solving Journey",
    subtitles: "Java, C++, C, Python, JavaScript, Scheme, SQL"
  },
}

export default function ProjectCardDemo () {
  return (
    <div className='project-card-demo'>
      {Object.keys(projects).map((project: string) => (
        <div className='project-card-demo-box' key={project}>
          <PorjectCard key={project} project={projects[project]} />
        </div>
      ))}
    </div>
  )
}
