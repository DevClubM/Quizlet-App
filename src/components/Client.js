import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import image from '../images/quiz.jpg'
import Modal from './ModalReact'
import Accordion from 'react-bootstrap/Accordion'

export default function Client(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Accordion className="mx-auto" style={{width: '40%'}} defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>
                {props.client.name}
            </Accordion.Header>
            <Accordion.Body>
                {props.client.gender}
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  )
}
