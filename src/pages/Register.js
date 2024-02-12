import"./register.css"
const  Register=()=>
{
    return(
        <center>
           
           <form  class="register"  role="form">
           
       <legend >Register Form</legend>
           
           <div class="form-group">
               <label for="">First Name:</label>
               <input type="text" placeholder="first name" required/><br/><br/>
               <label for="">Last Name:</label>
               <input type="text" placeholder="last name"required/><br/><br/>
               <label for="">Email-Id:   </label>
               <input type="text" placeholder="email-id"required/><br/><br/>
               <label for="">Password:</label>
               <input type="text" placeholder="password"required/><br/><br/>
               <label for="">Phone Number:</label>
               <input type="Number" required/><br/><br/>
               <label for="">Gender</label><br/><br/>
               <label for="">Male</label><input type="radio" name="male"/>
               <label for="">Female</label>
               <input type="radio" name="female"/>
               
               
           </div>
          
           
          
           <button type="submit"  class="btn btn-primary">Submit</button>
            
    
            
          
            
           
            
           </form>
        
      
           
        </center>
    )
}
export default Register;      