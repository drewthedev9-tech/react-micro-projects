import React, { Component } from 'react';
import ToDoForm from "./todoform";
import Todo from "./todo";


/*
/*
  TodoMVC
  1. add todo
  2. display todos
  3. cross off todo
  4. show number of active todos
  5. filter all/active/complete
  6. delete todo
  7. delete all complete
    7.1 only show if atleast one is complete
  8. button to toggle all on/off
*/

class TodoList extends Component {
    state = { 
        todos:[],
        todoToShow:"all",
        toggleAllComplete: true
     }

     addTodo =(todo)=>{
        //  cloning current state to do and adding(todo in function) todos
        // in state
         const newTodos  = [todo, ...this.state.todos];
         this.setState({
            todos: newTodos
         })
     }

     handletoggleComplete=(id)=>{
        this.setState({
            todos: this.state.todos.map(todo=>{
                // suppose to update
                if(todo.id === id){
                    return {
                        id: todo.id,
                        text: todo.text,
                        complete: !todo.complete
                    }
                } else{
                    return todo;
                }
            })
        })
     }

updatetodoToShow=(string)=>{
    this.setState({
    todoToShow :string
    })
}

handleDelete=(id)=>{
    this.setState({
        todos : this.state.todos.filter(todo => {
            return todo.id !== id 
        })
    })
}

removeAllComplete=()=>{
    this.setState({
        todos : this.state.todos.filter(todo => {
            // filter takes away so you want the not completes left.
            return !todo.complete
        })
    })
}

 render() { 
let todos =[];

if (this.state.todoToShow === "all") {
    todos = this.state.todos;
  } else if (this.state.todoToShow === "active") {
    todos = this.state.todos.filter(todo => !todo.complete);
  } else if (this.state.todoToShow === "complete") {
    todos = this.state.todos.filter(todo => todo.complete);
  }

        const {handletoggleComplete, handleDelete, removeAllComplete} = this
        return ( 
            <div>
            <ToDoForm 
            onSubmit={this.addTodo}
            />
            {todos.map(todo=>(
                <Todo key={todo.id} 
                // passing a functions down to the oncick of todo component.
                toggleComplete={()=>handletoggleComplete(todo.id)}
                onDelete= {()=>handleDelete(todo.id)}
                todo={todo}
                />
            ))}
            <div>
                todos left : {this.state.todos.filter(todo => !todo.complete).length}
            </div>
                <button onClick={()=> this.updatetodoToShow('all')}>all</button>
                <button onClick={()=> this.updatetodoToShow('active')}>active</button>
                <button onClick={()=> this.updatetodoToShow('complete')}>complete</button>
            { this.state.todos.filter( todo => todo.complete ).length ? (<div>
                <button onClick={removeAllComplete}>remove all complete</button>
            </div>
            ) : null}
            <div>
                <button onClick={()=>
                    this.setState({
                        todos: this.state.todos.map(todo=>({
                            ...todo,
                            complete : this.state.toggleAllComplete
                        })),
                        toggleAllComplete : !this.state.toggleAllComplete
                    })
                    
                }>
                ToglleAllcomplete : {`${!this.state.togglAllComplete}`}
                </button>
            </div>
            </div>
           
         );
           
            
    }
}
 
export default TodoList;