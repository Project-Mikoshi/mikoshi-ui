import React from 'react'
import './style.scss'
import PorjectCard from 'components/ProjectCard/component'

const projects: Record<string, any> = {
  QuickIn : {
    title: "QuickIn",
    description: "A simple check-in app that simplfies the gathering of contact tracing information.",
    subtitles: "React, Node.js",
    URL: "https://quickin.herokuapp.com"
  },
  UCLEI : {
    title: "UCLEI",
    description: "A stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works.",
    subtitles: "React, Node.js",
    URL: "https://uclei.herokuapp.com"
  },
  Shoppies : {
    title: "The Shoppies",
    description: "A web app that provides help to search movies via OMDB database and add to personal nomination list which can be export as a JSON file.",
    subtitles: "React",
    URL: "https://anthony-y-zhu14.github.io/The-Shoppies"
  },
  LeetCode : {
    title: "LeetCode Solutions",
    description: "A Record of My Problem Solving Journey",
    subtitles: "Java, C++, C, Python, JavaScript, Scheme, SQL",
    URL: "https://github.com/anthony-y-zhu14/LeetCode"
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
