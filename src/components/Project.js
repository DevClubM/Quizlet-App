import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import image from '../images/quiz.jpg'
import Modal from './ModalReact'

export default function Project(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> {props.project.name} </Card.Title>
          <Card.Text> {props.project.description} </Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            View Details
          </Button>  
          <Modal
            project={props.project}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

        </Card.Body>
      </Card>
  )
}
