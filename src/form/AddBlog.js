import axios from 'axios'
import React from 'react'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, TextField, Container, Typography, Grid, Box } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';


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
        

        <Container component="main" maxWidth="xs">
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography component="h1" variant="h5" marginBottom={5}>
          Add Blog post
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                type="text" name='title' onChange={handleChange} value={AddBlog.title} placeholder='Title'
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
              
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
              type="text" name='comment' onChange={handleChange} value={AddBlog.comment} placeholder='Comment'

              />
            </Grid>
            <Grid item xs={15}>
              <TextField
           type="text" name='text' onChange={handleChange} value={AddBlog.text} placeholder='message'
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            startIcon={<PersonAdd />}
            sx={{ mt: 2, mb: 1 }}
          >
            Add Blog
          </Button>
        </form>
      </Box>
    </Container>

    </div>
  )
}

