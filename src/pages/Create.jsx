import React from "react";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Create({task, setTask}) {
const navigator=useNavigate()     
    console.log(task)  

  const [object, setObject]=useState({
    taskname:'',
    detail:''
  })

  const handleChange=(e)=>{
        //console.log(e.target.value)
        const { name, value } = e.target;
        //const {name, detail}=e.target.value
        console.log(name)
        console.log(value)
        setObject(prevObject=>({
            ...prevObject, 
            [name]:value
        }))
  } 
  console.log(object.taskname.length===0 && object.detail.length===0)

  const handleSubmit = (e) => {
        e.preventDefault();

        // --- DYNAMIC ID GENERATION ---
        let newId;
        if (task.length === 0) {
            newId = 1;
        } else {
            // Find the maximum existing ID and add 1
            const maxId = task.reduce((max, item) => Math.max(max, item.id), 0);
            newId = maxId + 1;
        }

        // Create the new task object with the correct ID
        const newTask = {
            id: newId,
            taskname: object.taskname,
            detail: object.detail
        };

        // 1. Add the new task to the App's state
        setTask([...task, newTask]);
        
        // 2. Clear the form fields (optional but good practice)
        setObject({ id: 0, taskname: '', detail: '' });
        
        // 3. Navigate back to home
        navigator('/home');
    }
  const handleBack=()=>{
    navigator('/home')
  }
  return (
  <>
    <h1>Create a Task</h1>
    <form>
        <label htmlFor="name">Task Name:</label>
        <input type="text" id="name" name="taskname" required onChange={handleChange}/>
        <br/>
        <label htmlFor="detail">Task Detail:</label>
        <input type="text" id="detail" name="detail" required onChange={handleChange}/>
    </form>
    <br/>
    <button disabled={object.taskname.length===0 && object.detail.length===0} type="submit" onClick={handleSubmit}>Submit</button>
    <button onClick={handleBack}>Go back home</button>
  </>  
    
)
}

export default Create;
