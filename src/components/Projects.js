import React from 'react'
import Project from './Project'
import Container from 'react-bootstrap/esm/Container';
import image from '../images/projectImage.jpg'

export default function Projects(props) {
  
    const { projects } = props

    return (
      <>
        <img src={image} style={{width: "100%", height: '700px'}}/>
        <Container style={{display: 'flex'}}>
          {projects.map((project) => {
            return <Project key={project.id} project={project}/>
          })}
        </Container>
      </>
  ) 
}
