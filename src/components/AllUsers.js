import React from 'react';
import { getUsers } from '../API/user';
import UserList from '../components/User';
import {findUserByID} from '../API/user';

export default class AllUsers extends React.Component {
    state = {
        users: [],
        id:''
    }
    componentDidMount() {
        debugger
        getUsers()
            .then(res => {
                debugger
                const users=res;
                this.setState({users})
            }).catch(err => {
                debugger
            })

    }
    handelChange=(fieldName)=>(e)=>{
        this.setState({
        [fieldName]:e.target.value
        })
    }
    findUserbyID=(e)=>{
        const {id}=this.state;
        findUserByID(id)
        .then(res=>{
            debugger
            this.setState({
                users:[res]
                })
        }).catch(err=>{
            debugger
        })

    }
    render() {
        debugger
        return (
            <>
            <input type="text" name="id" placeholder="Find by ID" onChange={this.handelChange("id")}></input>
            <button type="button" onClick={this.findUserbyID}>Find</button>
            {this.state.users.map(user => (<UserList key={user._id} id={user._id} name={user.name} email={user.email} gender={user.gender} country={user.contry} />))}
            </>
        )
    }
}