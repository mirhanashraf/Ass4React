import React from 'react';
import {sentMessages} from '../API/user';
import OutMsgs from './outMsgs';

export default class Sent extends React.Component{

    state={
        outMsgs:[]
    }
    componentDidMount() {
        debugger
        sentMessages(this.props.match.params.id)
            .then(res => {
                debugger
                const outMsgs=res;
                this.setState({outMsgs})
            }).catch(err => {
                debugger
            })

    }
    render(){
        return(
            <>
            {
                this.state.outMsgs.map(msg=>(<OutMsgs text={msg.text} to={msg.to} date={msg.date}/>))
            }
            </>
        )
    }
}