import React from 'react'
import Project from './Project'
import Container from 'react-bootstrap/esm/Container';

export default function Projects() {
  
    const projects = [
      {name: "First Project", description: "Some random description here", size: 10},
      {name: "Second Project", description: "Some random description here", size: 13},
      {name: "Third Project", description: "Some random description here", size: 12},
      {name: "Fourth Project", description: "Some random description here", size: 50},
      {name: "Fifth Project", description: "Some random description here", size: 6},
    ];

    console.log(projects)
    
    return (
      <>
        <h1 style={{font: 'Century Gothic', textAlign: 'center'}}> Projects </h1>
        <Container style={{display: 'flex'}}>
          {projects.map((project) => {
            return <Project key={project.name} project={project}/>
          })}
        </Container>
      </>
  ) 
}
