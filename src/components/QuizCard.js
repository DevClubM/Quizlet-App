import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function QuizCard(props) {

  const { id } = props

  console.log(id)

  return (
      <>                
        <Card className="text-center mx-auto mt-5" style={{width: '40%'}}>
            <Card.Body>
                <Card.Title>Q#{id} </Card.Title>
                <Card.Text>
                    Question statement here...
                </Card.Text>
                <Button variant="primary">Review</Button>
            </Card.Body>
        </Card>
      </>
  )
}
