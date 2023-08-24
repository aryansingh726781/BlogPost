
import './App.css';
import  BlogPostList from "./form/BlogPostList";
import { About } from "./form/About";
import { AddBlog } from "./form/AddBlog";
import{Navbar} from "./form/Navbar"
import {
  BrowserRouter as Router, 
  Route,
  Routes,
  BrowserRouter

} from "react-router-dom";
function App() {


  return (
    <div className="App">

<BrowserRouter>
    <Navbar/>
     <Routes>
     <Route path='/' element={<BlogPostList/>} ></Route>
       
        <Route path='/more' element={<About/>} ></Route>
       
        <Route path='/addBlog' element={<AddBlog/>} ></Route>
     

     </Routes>
 </BrowserRouter>
    
    </div>
  );
}

export default App;
