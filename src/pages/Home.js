const Home=()=>{
    return(
   <>
  
  <div id="carousel-id" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
          <li data-target="#carousel-id" data-slide-to="0" class=""></li>
          <li data-target="#carousel-id" data-slide-to="1" class=""></li>
          <li data-target="#carousel-id" data-slide-to="2" class="active"></li>
      </ol>
      <div class="carousel-inner">
          <div class="item">
         <img src={`${process.env.PUBLIC_URL}/assets/images/Rc1.jpg`}  alt=""/>
                  <div class="container">
                  <div class="carousel-caption">
                      <h1>Example headline.</h1>
                      <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                      <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                  </div>
              </div>
          </div>
          <div class="item">
          <img src={`${process.env.PUBLIC_URL}/assets/images/Rc2.jpg`}  alt=""/>
              <div class="container">
                  <div class="carousel-caption">
                      <h1>Another example headline.</h1>
                      <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                      <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                  </div>
              </div>
          </div>
          <div class="item active">
          <img src={`${process.env.PUBLIC_URL}/assets/images/Rc3.jpg`}  alt=""/>
              <div class="container">
                  <div class="carousel-caption">
                      <h1>One more for good measure.</h1>
                      <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                      <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                  </div>
              </div>
          </div>
      </div>
      <a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
      <a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
  </div>
  
  <div class="container">
    <center>
    <h1>My Smart Basket</h1>
    
    <div class="row">
    <div class=" col-md-3">
        <a href="#" class="thumbnail">            
        <img src={`${process.env.PUBLIC_URL}/assets/images/img1.webp`}  alt=""/>
        </a>
    </div>
    <div class=" col-md-3">
        <a href="#" class="thumbnail">            
        <img src={`${process.env.PUBLIC_URL}/assets/images/img2.jpg`}  alt=""/>
        </a>
    </div>
    <div class=" col-md-3">
        <a href="#" class="thumbnail">            
        <img src={`${process.env.PUBLIC_URL}/assets/images/img3.jpg`}  alt=""/>
        </a>
    </div>
    <div class=" col-md-3">
        <a href="#" class="thumbnail">            
        <img src={`${process.env.PUBLIC_URL}/assets/images/img4.jpg`}  alt=""/>
        </a>
    </div>
    </div>
    </center>
  </div>
  
  <div class="container">
    <center>
    <h1>TOP OFFERS</h1>
    
    <div class="row">
    <div class=" col-md-3">
        <a href="#" class="thumbnail">            
        <img src={`${process.env.PUBLIC_URL}/assets/images/to1.webp`}  alt=""/>
        </a>
    </div>
    <div class=" col-md-3">
        <a href="#" class="thumbnail">            
        <img src={`${process.env.PUBLIC_URL}/assets/images/to2.webp`}  alt=""/>
        </a>
    </div>
    <div class=" col-md-3">
        <a href="#" class="thumbnail">            
        <img src={`${process.env.PUBLIC_URL}/assets/images/to3.webp`}  />
        </a>
    </div>
    <div class="col-md-3 ">
    <a href="#" class="thumbnail">
     <img src={`${process.env.PUBLIC_URL}/assets/images/to4.webp`}  alt=""/></a>
   </div>
    </div>
   </center>
  </div>
  
  
  
  <div class="container">
    <center>
    <h1>BANK OFFERS</h1>
    
    <div class="row">
    <div class=" col-md-3">
        <a href="#" class="thumbnail">            
        <img src={`${process.env.PUBLIC_URL}/assets/images/b1.jpg`}  alt=""/>
        </a>
    </div>
    <div class=" col-md-3">
        <a href="#" class="thumbnail">            
        <img src={`${process.env.PUBLIC_URL}/assets/images/b2.jpg`}  alt=""/>
        </a>
    </div>
    <div class=" col-md-3">
        <a href="#" class="thumbnail">            
        <img src={`${process.env.PUBLIC_URL}/assets/images/b3.jpg`}  />
        </a>
    </div>
    <div class="col-md-3 ">
    <a href="#" class="thumbnail">
     <img src={`${process.env.PUBLIC_URL}/assets/images/b4.jpg`}  alt=""/></a>
   </div>
    </div>
   </center>
  </div><br/>

  
 
 
  
  
 
      
        
  
    
   </>

   
    )
}
  
export default Home;