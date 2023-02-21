import { createContext } from "react";

const Contex=createContext({
    Alltask:[],
    input_name:()=>{},
    input_Description:()=>{},
    create:()=>{},
    delete_Task:()=>{},
    completed:()=>{},
    incomplete:()=>{},
    Create_Button:()=>{},
    Create_Boolean:false
    
})
export default Contex