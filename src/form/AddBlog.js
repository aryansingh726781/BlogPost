import axios from 'axios'
import React from 'react'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const AddBlog = () => {
 const navigate=   useNavigate();
    const [AddBlog,SetAddBlog]=useState(
        {
title:"",
comment:"",
text:""
        }
    )

console.log(AddBlog)



const handleChange = e =>{

    SetAddBlog({
      ...AddBlog,[e.target.name]:e.target.value
    
  })
  }

const handleSubmit= async ()=>{
    const{ title ,comment ,text} =AddBlog
    if(title && comment && text ){
        const  result= await axios.post("http://localhost:4000/Blogs",AddBlog)
        console.log(result)
    } else{
        alert("invalid")
    }
 
}

  return (
    <div>
        <input  type="text" name='title' onChange={handleChange} value={AddBlog.title}/><br />
        <input type="text" name='comment' onChange={handleChange} value={AddBlog.comment} /><br />

        <input type="text" name='text' onChange={handleChange} value={AddBlog.text} /><br />
        <button onClick={handleSubmit} >Add blog</button>
    </div>
  )
}

