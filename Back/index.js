
const express=require("express")
const mongoose=require("mongoose")
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
 mongoose.connect("mongodb://0.0.0.0:27017/blogdata",) .then(() => {
    console.log('Successfully connected');
  })
  .catch(err => {
    console.error('Connection error', err);
  });

//user schema 
const userSchema = new mongoose.Schema({
  title:String,
  comment:String,
  text:String
})

const Blog = new mongoose.model("blog", userSchema)


app.get('/Blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/Blogs', async (req, res) => {
  const {title , comment , text}=req.body
  try {
    const blog = new Blog(
      {
        title:title,
        comment:comment,
        text:text
      
      }
    );
    await blog.save();
    res.status(201).json(blog);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});








app.listen(4000,()=>{console.log("sever Started")})