import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import image from '../images/quiz.jpg'
import Modal from './ModalReact'

export default function Project(props) {
  const [modalShow, setModalShow] = React.useState(false);

  const { project } = props

  return (
      <Card className="ms-4 mt-5 mb-5" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title> <b>{project.name} </b></Card.Title>
          <Card.Text> {project.description} </Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            View Details
          </Button>  
          <Button className="ms-2" variant="secondary" href={"/projects/" + project.id}>
            Open
          </Button>  
          <Modal
            project={project}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Card.Body>
      </Card>
  )
}
