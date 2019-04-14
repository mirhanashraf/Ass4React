import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';

import CreateUser from '../src/components/CreateUser/CreateUser';
import AllUsers from '../src/components/AllUsers';
import sendMsg from '../src/components/sendMsg';
import Inbox from './components/inbox';
import Sent from './components/Sent';
import Register from './components/Register';

class App extends Component {
  render(){
    return(
      <>
      <Router>
        <>
      {/* <CreateUser/> */}
      <Switch>
      <Route exact path="/login" component={CreateUser} />  
      <Route exact path="/" component={CreateUser} /> 
      <Route exact path="/api/users/" component={AllUsers} />
      <Route exact path="/api/sendMessage" component={sendMsg} />
      <Route exact path="/api/Inbox/:id" component={Inbox} />
      <Route exact path="/api/Sent/:id" component={Sent} />
      <Route exact path="/Register" component={Register} />
      </Switch>
      </>
      </Router>
     </>

    )
  }
}
export default App;
