import { locations } from '#constants'
import React from 'react'

const projects = locations.work?.children ?? [];


const Home = () => {
  return (
    <section className="relative top-50">
      <div>
        <ul>
          {projects.map((project, index) => (
            <li key={project.id ?? project.name ?? index}>
              <img src={project.icon ?? '/icons/folder.png'} width="40" alt={project.name} />
              <p>{project.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Home