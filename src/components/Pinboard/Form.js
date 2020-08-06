import React, {useState} from "react";
import "./Form.css"
import Card from 'react-bootstrap/Card'
import { Button, CardGroup, CardColumns } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'



export default function AdInd ({ad},{collaborator}) {
  const [count, setCount] = useState(ad.positions_available)

  const onClick = () => {
    if (count > 0){
      setCount(count - 1)
    }
    //disable button
    console.log(count)
  }

return (   
  <>
<div className="listings">
<CardColumns className="list">
<Card style={{ width: '18rem' }}>
  <Image className="images" variant="top" src={ad.profile_pic} roundedCircle />
  <Card.Body>
    <Card.Title>{ad.title}</Card.Title>
    <Card.Text>{ad.role}</Card.Text>
    <Card.Text>{ad.location}</Card.Text>
    <Card.Text>{ad.description}</Card.Text>
    <Card.Text>{ad.positions_available}</Card.Text>
    <Card.Text>{collaborator.profile_pic}</Card.Text>
<Button onClick={onClick} variant="primary" disabled={count===0}>Join</Button>
  </Card.Body>
</Card>
</CardColumns>
</div>
</>
)}