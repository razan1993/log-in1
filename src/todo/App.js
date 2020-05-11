import React,{Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
class App extends Component{
state={
  todos:[
    { id:1, content:'buy some milk'},
    { id:2, content:'buy some bread'},
    { id:3, content:'buy some chocolate'},
    { id:4, content:'buy some eggs'},
    { id:5, content:'buy some chips'},
  ]
}

deleteTodo = (id) =>{
 const todos = this.state.todos.filter(todo => {
   return todo.id !==id
 });
 this.setState({
todos
 })
}
// addTodo = (todo)=>{
//   todo.id=Math.random();
//   let todos = [...this.state.todos, todo];
//   this.setState({
//     todos
//   })
// }
  render(){
    return(
      <div className="app container center">
      <h1 className = "center red-text">Todo-list:</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
     <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}
export default App;
