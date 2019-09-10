import React, { Component } from 'react';
// import Todos from './Todos';
// import AddTodo from './AddTodo';
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'


class App extends Component {
//   state = {
//     todos: [
//       {id: 1, content: 'buy dildo'},
//       {id: 2, content: 'buy buttplug'}
//     ]
//   }

//   deleteTodo =(id) => {
//     const todos= this.state.todos.filter(todo => {
//       return todo.id !== id
//     })
//     this.setState({
//       todos
//     })
//   }

//   addTodo =(todo) => {
//     todo.id = Math.random();
//     let todos = [...this.state.todos, todo]
//     this.setState({
//       todos: todos
//     })
//   }
      


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
