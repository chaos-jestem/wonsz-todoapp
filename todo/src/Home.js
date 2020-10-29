import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import App from './App';
import Adminpanel from './Adminpanel';
 
class Home extends Component {
  render() {
    return (      
       <BrowserRouter>
            <Switch>
             <Route path="/" component={App} exact><App /></Route>
             <Route path="/admin" component={Adminpanel}/>
            </Switch>
      </BrowserRouter>
    );
  }
}
 
export default Home;