//import React, { useState } from 'react';
import  ReactDOM from 'react-dom/client';
/*function Sample(){
  return<h1>welcome to react</h1>
}
const r1 = document.getElementById('root');
const c1 = ReactDOM.createRoot(r1);
c1.render(<Sample/>);*/

//implemented to the html
/*function Sample(){
  return(
    <div>
      user name:<input type="text"/>
      password:<input type="password"/>
      <input type="submit" value="login"/>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//basic rendering

/*const App=()=>{
  return(
    <div>
    <h1>welcome to basic rendering</h1>
    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById('root'))*/

//dynamic rendering

/*const App=()=>{
  const username="sri";
  return(
    <div>
      <h1>hello{username}</h1>
      <p>{new Date().toLocaleDateString()}</p>

    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById('root'))*/

//with jsx

/*const myelem=<h1>welcome to the jsx</h1>
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(myelem)*/

//with out jsx

/*const myelem=React.createElement('h1',{},'welcome')
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(myelem)*/

//list

/*const myelement=(
  <ul>
    <li>apple</li>
    <li>mongo</li>
    <li>banna</li>
  </ul>
);
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(myelement)*/

//class name

/*import'./index.css';
function App(){
  return(
    <h1>welcome to react</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//conditional rendering

/*const x=18;
let text="hello"
if(x>10){
  text="goodbye"
}
else if(x==10){
  text="ten!"
}
else{
  text="less then 10"
}
const Myelem=()=>{
  return(
    <div>{text}</div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myelem/>)*/

//ternary operator

/*const x=10
const Myelem=<h1>{(x)<10?"hello":"goodbye"}</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(Myelem)*/

//importing and exporting

/*import App from './App';
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//class component

/*class Sample extends React.Component
{
  render(){
    return(
      <div>hello world!</div>
    )
  }
}
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(<Sample/>)*/

//function component

/*function Sample(){
  return(
    <h1>welcome to the function component</h1>
  )
}
const r3=ReactDOM.createRoot(document.getElementById('root'))
r3.render(<Sample/>)*/

//props(function component with argument passing)

/*function Sample(props)
{
  return(
    <div>hello world!{props.pid}</div>
  )
}
const r3=ReactDOM.createRoot(document.getElementById('root'))
r3.render(<Sample pid="1001"/>)*/

//component in component

/*function Sample(){
  return<h2>i am a Sample!</h2>
}
function Sri(){
  return(
    <>
    <h1>who lives in my sri?</h1>
    <Sample/>
    </>
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Sri/>)*/


//component constructor

/*class Sample extends React.Component
{
  constructor(){
    super();
    this.state={
      name:"sri"
    }
  }
  render(){
    return(
      <div>my name is::{this. state.name}</div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//changeing the state object

/*class Sample extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      emp :{
        id :1002, name :"sri", city :"new york"
      }
      ShowData:true
    };
  }
  toggledata=()=>{
    this.setState({showdata:this.state.showdata})
  }
  render(){
    let  data;
    if(this.state.showdata){
      data=<div><b>employee id :</b>{this.state.empid},
      <b>name :</b>{this.state.empname},
      <b>city :</b>{this.state.empcity}
      </div>
      else{data="no data available"}
      return(
        <div>
          <button onClick={this.toggledata}>show/hide employee details</button>
          <h3>employee details</h3>{data}
        </div>
      )
    }
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/


//lifecycle component

/*class Header extends React.Component
{
  constructor(props){
    super(props);  
    this.state={f1:"red"};
  }
  render(){
    return(
      <h3 style={{color:this.state.f1}}>{this.props.text}hello</h3>
    );
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//react events(adding events)

/*function Football(){
  const shoot=()=>{
    alert("goal shooted")
  }
  return(
    <>
    <button onClick={shoot}>take shoot</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//arrow function (sending the event object menually)

/*function Football(){
  const shoot=(a,b)=>{
    alert(b.type);
  }
  return(
    <button onClick={(e)=>shoot("goal".e)}>take the shot!</button>
  );
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Football/>)*/

//react conditional rendering

/*function MissedGoal(){
  return<h1>missed</h1>
}
function MadeGoal(){
  return<h1>goal</h1>
}
function Goal(props){
  const isGoal=props.isGoal;
  if(isGoal==true){
    return<MadeGoal/>
  }
  else{
    return<MissedGoal/>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Goal is Goal={true}/>)*/

//hooks usestate

/*import { useState } from 'react';
function Counter(){
  const[Count,SetCount]=useState(0);
  return(
    <div>
      <p>Count:{Count}</p>
      <button onClick={()=>SetCount(Count+1)}>increment</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//react list map function

/*function Car(props){
  return<li>i am a{props.brand}</li>
}
function Garage(){
  const cars=["ford","thar","BMW"]
  return(
    <>
    <h1>who lives in my garage?</h1>
    <ul>
      {cars.map((car)=><car brand={car} key={car}/>)}
    </ul>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//react forms

/*function Myform(){
  return(
    <form>
      <label>username</label>
      <input type="text"/>
      <label>password</label>
      <input type="password"/>
      <input type="submit" value="login"/>
    </form>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Myform/>)*/

//react use state


/*function Contactform(){
  const[name,setname]=useState('');
  const[email,setemail]=useState('');
  const handlesubmit=(e)=>{
    e.preventDefalut();
    console.log("user name is"+name+"and user email is"+email)
    alert("The name was entered")

  }
  return(
    <>
    <form>
      <h2>contact us</h2>
     
      <label>name:</label><br/>
      <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/><br/>
      <label>email:</label><br/>
      <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}/><br/>
      <button onClick={handlesubmit}>submit</button>
    </form>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Contactform/>)*/

//react textarea

/*function Mytextarea(){
  const [value,setvalue]=React.useState("hello world!");
  return(
    <div>
      <textarea value={value} onChange={(event)=>setvalue(event.tergetvalue)}></textarea>
      <p>{value}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Mytextarea/>)*/


//react dropdown

/*function SelectBoxExample(){
  const[selectoption,SetSelectionOption]=useState('');
  const  handleselectchange=(e)=>{
    console.log; {'option selected;${e.target.value}'}
    SetSelectionOption(e.target.value)
  };
  return(
    <>
    <label for ="cars">choose a car</label>
    <select id="cars" name="cars" onChange={handleselectchange}>
    <option value="volvo">volvo</option>
    <option value="ford">ford</option>
    <option value="thar">thar</option>
    </select>
    {selectoption && 'youbselected ${selectedoption}'}
    </>
    )
    }
    const r1=ReactDOM.createRoot(document.getElementById('root'))
    r1.render(<SelectBoxExample/>)*/

    //react router
    
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from './pages/Product';
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
         

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<App />);