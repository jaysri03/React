
import "./contact.css"
const  Contact=()=>
{
    return(
     <>
        <center>
        
            <form action="" class="contact" method="thank you" role="form">
            <legend >Contact us</legend> 
            <div class="form-group">

            <input type="text" placeholder="Your Name" required/><br/><br/>
           <input type="text" placeholder="Your Mail" required/><br/><br/>

         <textarea class="your adderss" rows="4"placeholder="your address" required="required"></textarea><br/><br/>
             <input type="text" placeholder="Your Message"/>
          </div>
           <button type="submit"   class="btn btn-primary">Submit</button>
            </form>  
            
           
          
       
          
           
                   
         
        </center>
        </>
    )
}
export default Contact;
