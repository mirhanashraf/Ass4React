import React from 'react';
import {Form,Button} from 'react-bootstrap';
import {Registeruser} from './../API/user';
import { withRouter } from "react-router";

class Register extends React.Component {
    state={
        name:'',
        email:'',
        password:'',
        g:'',
        gender:'',
        contry:''
    }
    handleChange=(fieldName)=>(e)=>{
        this.setState({
            [fieldName]:e.target.value
        })
    }
    register=()=>{
        debugger

        const { name,email,password,g,gender,contry}=this.state;
        const age=+g;
        Registeruser({ name,email,password,age,gender,contry})
        .then(res=>{
            debugger
            this.props.history.push('/login')
        }).catch(err=>{
            debugger
        })

    }
    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" onChange={this.handleChange("name")}/>
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange("email")}/>
                    
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange("password")}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" name="age" placeholder="Enter age" onChange={this.handleChange("g")}/>
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control type="text" name="gender" placeholder="Enter gender" onChange={this.handleChange("gender")}/>
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" name="contry" placeholder="Enter counter" onChange={this.handleChange("contry")}/>
                        
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={this.register}>Submit</Button>
                </Form>;
            </>
        )
    }
} 
export default withRouter(Register);