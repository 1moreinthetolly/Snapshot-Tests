import React from "react"
import Card from "react-bootstrap/Card"
import MoSalah from './MoSalah.jpg'
import { CardText } from 'react-bootstrap'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={MoSalah} />
        <Card.Body>
            <Card.Title>Mo Salah</Card.Title>
            <CardText>
            I am a famous soccer player
            </CardText>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard