
import "./login.css"
const  Login=()=>
{
    return(
        <div>
       <center>
         <form >
         
            <legend >Login</legend>
        
        <div class="form-group">
            <label for="">Email Id</label><br/>
            <input type="text" placeholder="Enter email id" required/><i class="fa-solid fa-user"></i><br/><br/>
            <label for="">Password</label><br/>
            <input type="password" placeholder="Enter password" required/><i class="fa-solid fa-lock"></i><br/>
        </div>

        <button type="submit"  class="btn btn-primary">Submit</button>
       
           
        </form>
        
       
        
        
       </center> 
       </div>
    )
    
}
export default Login;