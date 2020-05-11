import React, {Component} from 'react'


class AddTodo extends Component{
 state = {
   content:''
 }

 handelChange = (e) => {
   this.setState({
     content:e.target.value
   })
 }

handelSubmit = (e) =>{
  e.preventDefault();
  console.log(this.state);
  // this.props.addTodo(this.state)
}


  render(){
    return(
      <div>
        <form onSubmit={this.handelSubmit}>
          <label>Add New Todo</label>
          <input type="text" onChange={this.onChange} />
        </form>
      </div>
    )
  }
}
export default AddTodo ;