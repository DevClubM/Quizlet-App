import React from 'react'
import Project from './Project'
import Container from 'react-bootstrap/esm/Container';
import image from '../images/projectImage.jpg'
import '../cssFiles/projects.css'

export default function Projects(props) {
  
    const { projects } = props

    return (
      <>
        <img src={image} className="smthin"/>
        <Container style={{display: 'flex', marginTop:'-450px'}}>
          {projects.map((project) => {
            return <Project key={project.id} project={project}/>
          })}
        </Container>
      </>
  ) 
}
