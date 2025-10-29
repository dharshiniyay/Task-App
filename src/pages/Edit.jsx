import React from 'react'
import {useParams} from 'react-router-dom'
import  {useState} from 'react'
import {useNavigate} from 'react-router-dom'


function Edit({task, setTask}) {
  const navigator=useNavigate()
  const {id} = useParams(); //object destructuring //useParams is used to recieve the dynamic segment
  const taskId = parseInt(id);
  // ⚠️ CORRECTED LOGIC: Use find() to locate the task based on its ID
  const initialTask = task.find(t => t.id === taskId);
  // Initialize state with the found task, or a fallback object if not found
  const [taskToEdit, setTaskToEdit] = useState(initialTask || { id: taskId, taskname: '', detail: '' });
  console.log(taskToEdit)
  console.log(task)

  const handleChange=(e)=>{
    const  {name, value}=e.target
   setTaskToEdit(prevTask => ({
            ...prevTask,
            [name]: value
        }));
    
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const updatedTask=task.map(t => {
      if(t.id==taskId){
        return taskToEdit
      }
      else {
        return t
      }
      
    })
    setTask(updatedTask)
    navigator('/home')
  }

  const handleBack=()=>{
    navigator('/home')
  }
  return (
    <div>
      <h1>Edit you task {id}</h1>
      <label htmlFor="taskname">Update Name: </label>
      <input type="text" id="taskname" name="taskname" onChange={handleChange}/>
      <br/>
      <br/>
      <label htmlFor="detail">Update Details: </label>
      <input type="text" id="detail" name="detail" onChange={handleChange}/>
      <br/>
      <br/>
      <button type="submit" onClick={handleSubmit}>Submit </button>
      <button onClick={handleBack}>Go back home</button>
    </div>
  )
}

export default Edit
