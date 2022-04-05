import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProjectPage(props) {
  
  const { id } = useParams()
  const { projects } = props

  const projectToBeDisplayed = projects.find((p) => p.id == id)

  return (
    <>
      {projectToBeDisplayed.name} <br/>
      There are {projectToBeDisplayed.size} questions in this project
    </>
  )
}
