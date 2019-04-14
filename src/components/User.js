import React from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class UserList extends React.Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.country}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.gender}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.email}</Card.Subtitle>
                    
                <Link to={`/api/sendMessage`}><a>Send Message</a></Link> <br/>
                <Link to={`/api/Inbox/${this.props.id}`}><a>Inbox</a></Link> <br/>
                <Link to={`/api/Sent/${this.props.id}`}><a>Sent</a></Link> <br/>
                </Card.Body>
            </Card>
        )
    }
}