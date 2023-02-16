import React, { Component } from 'react'
import Contex from './Contex';

export default class Global extends Component {
  state={
   Alltask:[
    {name:"read a book",Description:"I want to read a book every day",checked:false},
    {name:"print a book",Description:"I want to ptint a book every day",checked:false},
    {name:"write a book",Description:"I want to write a book every day",checked:true},
    {name:"listen to music",Description:"I want to listen to music every day",checked:true},

   ],
    taskname:"" ,
    Description:""

   }


    delete=(id)=>{
      let task = [...this.state.Alltask];
      let filter=task.filter(p=>p.id!==id)
      this.setState({Alltask:filter})
      
  
    }



  Input_func=(e)=>{
    this.setState({taskname:e.target.value})
    

  }
  Input2_func=(e)=>{
     this.setState({Description:e.target.value})
  }
  Create_func=()=>{
    t=this.state.taskname
    let task={name:this.state.taskname,
      Description:this.state.Description
      ,checked:false}
    let Alltask=[...this.state.Alltask]
    Alltask.push(task)
    this.setState({Alltask:Alltask})
    
    this.setState({taskname:"",
    Description:""})

    

  }
  
  
  
  
  
  
  
  
    render() {
    return (
      <div>
<Contex.Provider value={{Alltask:this.state.Alltask,
input_name:this.Input_func,
input_Description:this.Input2_func,
create:this.Create_func,
delete:this.delete



}}>
  {this.props.children}
</Contex.Provider>

      </div>
    )
  }
}
