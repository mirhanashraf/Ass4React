import React from 'react';
import {Card} from 'react-bootstrap';
export default class OutMsgs extends React.Component{
    render(){
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Sent</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">To: {this.props.to}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Text: {this.props.text}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Date: {this.props.date}</Card.Subtitle>
                </Card.Body>
            </Card>
        )
    }
} 