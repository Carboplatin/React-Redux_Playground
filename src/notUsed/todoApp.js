// class App extends Component {
//     state = {
//       todos: [
//         {id: 1, content: 'buy dildo'},
//         {id: 2, content: 'buy buttplug'}
//       ]
//     }
  
//     deleteTodo =(id) => {
//       const todos= this.state.todos.filter(todo => {
//         return todo.id !== id
//       })
//       this.setState({
//         todos
//       })
//     }
  
//     addTodo =(todo) => {
//       todo.id = Math.random();
//       let todos = [...this.state.todos, todo]
//       this.setState({
//         todos: todos
//       })
//     }