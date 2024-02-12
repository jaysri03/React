import "./Layout.css"
import { Outlet,Link } from "react-router-dom";
const Layout=()=>{
    return(
     <> 
     
        <nav class="navbar navbar-expand navbar-light bg-light">
          <ul class="nav navbar-nav">
          
                <li class="nav-item active">
                <Link to="/">Home</Link>
                </li>
                <li class="nav-item">
                   <Link to="/product">Product</Link>
                </li>
                
                <li class="nav-item">
                   <Link to="/register">Register</Link>
                </li>
                <li class="nav-item">
                   <Link to="/contact">Contact</Link>
                </li>
                <li class="nav-item">
                   <Link to="/login">Login</Link>
                </li>
                   <div class="input-group">
                     <input type="text" class="form-control"  placeholder="Search"/>
                     <span class="input-group-btn">
                        <button type="button" class="btn btn-primary">Search</button>
                     </span>
                   </div>
                                 
            </ul>
           
        </nav>
          
         
        
       
        
        
         
          

  
        
        
   
   
       
        <Outlet/>
        </>
    )
}
export default Layout;