import React, { Component } from 'react'
import uuid from 'react-uuid';
import Contex from './Contex';

export default class Global extends Component {
  state={
   Alltask:[
    {name:"read a book",Description:"I want to read a book every day",checked:false,id:1},
    {name:"print a book",Description:"I want to ptint a book every day",checked:false,id:2},
    {name:"write a book",Description:"I want to write a book every day",checked:true,id:3},
    {name:"listen to music",Description:"I want to listen to music every day",checked:true,id:4},

   ],
    taskname:"" ,
    Description:"",
    Create_Bolean:false

   }

   Create_Button=()=>{
    this.setState({Create_Bolean:!this.state.Create_Bolean})
   }


    delete=(id)=>{
      let task = [...this.state.Alltask];
      let filter=task.filter(p=>p.id!==id)
      this.setState({Alltask:filter})
      
  
    }



  Input_func=(e)=>{
    this.setState({taskname:e.target.value})
    console.log(this.state.taskname)
    

  }
  Input2_func=(e)=>{
     this.setState({Description:e.target.value})
     console.log(this.state.Description)
  }
  Create_func=()=>{
    let task={name:this.state.taskname,
      Description:this.state.Description
      ,checked:false,
    id:uuid()}
    let Alltask=[...this.state.Alltask]
    Alltask.push(task)
   if (this.state.taskname &&  this.state.Description )
   { this.setState({Alltask:Alltask})}
    
    this.setState({taskname:"",
    Description:""})
}

completed=(id)=>{
let task=[...this.state.Alltask]
const index=task.findIndex(p=>p.id===id)
task[index].checked=true
this.setState({Alltask:task})

}
 incompleted=(id)=>{
let task=[...this.state.Alltask]
const index=task.findIndex(p=>p.id===id)
task[index].checked=false
this.setState({Alltask:task})
// console.log(id)

}
  
  
  
  
  
  
  
  
    render() {
    return (
      <div>
<Contex.Provider value={{Alltask:this.state.Alltask,
input_name:this.Input_func,
input_Description:this.Input2_func,
create:this.Create_func,
delete_Task:this.delete,
completed:this.completed,
incomplete:this.incompleted,
Create_Button:this.Create_Button,
Create_Boolean:this.state.Create_Bolean



}}>
  {this.props.children}
</Contex.Provider>

      </div>
    )
  }
}
