

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function BlogPostList () {
  const  navigate = useNavigate()
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/Blogs');
      const data = await response.json();
      setBlogs(data);
    }
    fetchData();
  }, []);

  const handleSubmit=()=>{
    navigate("/more")
  }
  
  return (
    <div>
        <h1>BlogData</h1>
      {blogs.map(blogs => (
        <div key={blogs._id}>
          {/* <h2>{blog.title}</h2>
          <p>{blog.comment}</p>
          <p>{blog.text}</p> */}
          {/* Add a link to navigate to the individual blog post */}

          <Card sx={{ minWidth: 276 , width:40, float:'left', }  }>
      <CardContent>
     
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {blogs.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {blogs.comment}
        </Typography>
        <Typography variant="body2">
        {blogs.text}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleSubmit} size="small">Learn More</Button>
      </CardActions>
    </Card>

        </div>
      ))}
    </div>
  );
}


export default BlogPostList



























