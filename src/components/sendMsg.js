import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {sendMsgs} from '../API/user';
// import msgSent from '../components/msgSent';
export default class sendMsg extends React.Component {

    state={
        f:'',
        t:'',
        text:''
    }

    handleChange=(fieldName)=>e=>{
        this.setState({
            [fieldName]:e.target.value
        });

    }

    sendMessage=(e)=>{
        debugger
        e.preventDefault();
        const {f,t,text}=this.state;
        const from=+f;
        const to=+t;
        sendMsgs({from,to,text})
        .then(res=>{
            // res.map(r=><msgSent response={r.message}/>)
            console.log('done')
        })
        .catch(err=>{
            debugger
        })
    }
    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" placeholder="form" name="from" onChange={this.handleChange("f")}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>To</Form.Label>
                    <Form.Control type="text" placeholder="to" name="to" onChange={this.handleChange("t")}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="text" placeholder="text" name="text" onChange={this.handleChange("text")}/>
                </Form.Group>
                <Button variant="primary" type="button" onClick={this.sendMessage} >Submit</Button>
            </Form>
    )
    }
}