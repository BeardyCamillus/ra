import React from 'react'

export default function ProjectList({ projects }) {

  return (
    <div>
      <ul className='project-list'>
        {projects.map(project => {
          return <li> <img src={project.img} /> </li>
        })}
      </ul>
    </div>
  )
}
