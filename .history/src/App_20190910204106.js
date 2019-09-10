import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'


class App extends Component {

  render ( ) {
      return (
        
          <div className="container">
            <BrowserRouter>
              <Navbar/>
              <Switch>
                <Route exact path='/' component={Home}/>  
                <Route path='/about' component={About}/>  
                <Route path='/contact' component={Contact}/>  
                <Route path='/:post_id' component={Post} />
              </Switch>       
            </BrowserRouter>
          </div>
        
      );
    }      
}
                 
export default App;
