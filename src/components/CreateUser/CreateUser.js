import React from 'react';
import {login} from './../../API/user';
// import {Redirect} from 'react-router'
import { withRouter } from "react-router";


 class CreateUser extends React.Component{
    state={
        name:'',
        password:''
    }
    setStateField=(fieldName)=>e=>{
        this.setState({
            [fieldName]:e.target.value
        });

    }
    handleLogin=()=>{
        debugger
        const {name,password}=this.state;
        login({name,password})
        .then(res=>{
            localStorage.setItem('token',res.token)
            debugger
            this.props.history.push(`/api/users/`);
        })
        .catch(err=>{
            // debugger
        })
    }
    regiterPage=()=>{
        this.props.history.push(`/Register`);
    }
    render(){
        const {name,password}=this.state;
        return(
            <>
            <form>
                <fieldset>
                    <input type="text" value={name} name="username" onChange={this.setStateField('name')} placeholder="User Name"/>
                    <input type="password" value={password} name="password" onChange={this.setStateField('password')} placeholder="User Password"/>
                </fieldset>
               <button type="button" onClick={this.handleLogin}>Login</button> 
            </form>
            <button type="button" onClick={this.regiterPage}>Register</button>
            </>
        )
    }
}
export default withRouter(CreateUser);