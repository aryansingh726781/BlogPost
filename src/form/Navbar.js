import { Link} from "react-router-dom";
import React from 'react'


export const Navbar = () => {
  return (
    <div>
      <div className='toggle' >
        <label htmlFor="check">
        <span></span>
        <span></span>
        <span></span>
        </label>
       
      </div>
      <input type="checkbox" id="check" />
        <ul className="nav" >
            <li> <Link to="/" className='a'>Home</Link> </li>
           
          
            <li> <Link to="/addBlog" className='a'>AddBlog</Link> </li>
           
           

           
            
        </ul>
        
    </div>

  )
}
