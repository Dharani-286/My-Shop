import React from 'react'
import pic from './pic.png'
import './Login.css'
const Login = () => {
  var users=[
    {username:"Dharani",pin:2020, cart:[]},
    {username:"Gayathri",pin:2323,cart:[]},
    {username:"Chicky",pin:2828,cart:[]}
];
  
 // const clickLogin = () =>{
   // var username=document.getElementById("username").value
   // var getuserPassword=document.getElementById("pin").value
   // var currentuser=users.filter((data) =>{
    //      return username===data.username;
   // });
   // console.log(currentuser);
   // if(currentuser.length>0){
//if(currentuser[0].pin===getuserPassword){
        //localStorage.setItem("username",currentuser[0].username);
       // window.location.replace('/Home');
      //}else{
      //  console.log("Invalid Password");
     // }
   // }
 // }
 function clickLogin(params){
  window.location.replace("/Home");
 }
  return (
    <div>
        <img src={pic} alt=""></img>
        <input type="text" placeholder="username" required className="namebox"/>
        <br/>
        <input type="password" placeholder="Pin" required className="pinbox"/>
        <br/>
        <button onClick={clickLogin} className="btn">Login</button>
        <p className="terms"> I agree to terms and conditions <input type="checkbox" name="check" required /></p>
    </div>
  );
};

export default Login