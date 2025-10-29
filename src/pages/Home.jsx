import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Home({task, setTask}) {
const navigator=useNavigate()  

  const handleClick =()=>{
     navigator("/create")
  }

  const handleEditClick=(id)=>{
    navigator(`/edit/${id}`)
    console.log(id)
  }

  const handleDelete=(id)=>{
     const newArray=task.filter(item => item.id!==id)
     setTask(newArray)
  }
  return (
    <div>
      <h1>Welcome to Task Managment App</h1>
      <button onClick={handleClick}>Create Task </button>
      <table border="1">
        <thead>
            <tr>
                <th>Task Name</th>
                <th>Task Details</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {task.map((item,idx)=>{
                return(
                    <tr key={item.id}>
                        <td >{item.taskname}</td>
                        <td >{item.detail}</td>
                        <td ><button onClick={()=>handleEditClick(item.id)}>Edit</button></td>
                        <td ><button onClick={()=>handleDelete(item.id)}>Delete</button></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Home
