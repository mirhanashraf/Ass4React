import React from 'react';
import {inboxMessages} from '../API/user';
import InMsgs from './inMsgs';
export default class Inbox extends React.Component{

    state={
        incomingMsgs:[]
    }
    componentDidMount() {
        debugger
        inboxMessages(this.props.match.params.id)
            .then(res => {
                debugger
                const incomingMsgs=res;
                this.setState({incomingMsgs})
            }).catch(err => {
                debugger
            })

    }
    render(){
        return(
            <>
            {
                this.state.incomingMsgs.map(msg=>(<InMsgs text={msg.text} from={msg.from} date={msg.date}/>))
            }
            </>
        )
    }
}