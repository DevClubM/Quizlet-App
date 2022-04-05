import React from 'react'
import { useParams } from 'react-router-dom'
import QuizCard from './QuizCard'

export default function ProjectPage(props) {
  
  const { id } = useParams()
  const { projects } = props

  const projectToBeDisplayed = projects.find((p) => p.id == id)

  const quizes = []

  for(let i = 0; i < projectToBeDisplayed.size; i++){
    quizes.push(i + 1);
  }

  return (
    <>
      <div style={{textAlign: 'center'}}>
        <h1>{projectToBeDisplayed.name}</h1> <br/>
        <h2>There are {projectToBeDisplayed.size} questions in this project</h2>
      </div>
      {quizes.map((q) => <QuizCard key={q} id={q}/>)}
    </>
  )
}
