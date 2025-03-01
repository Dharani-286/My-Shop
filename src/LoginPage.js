import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Card.css'
var users=[
    {username:"Dharani",password:2020},
    {username:"Gayathri",password:2323},
    {username:"Chicky",password:2828},
];

function LoginPage(){
    const[username,setName]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    const navigate=useNavigate();
    const clickLogin = () => {
        const isValid=users.some(user =>
            user.username === username && user.password === Number(password));
        if(isValid){
            navigate("/home");
        }
        else{
            setError("Invalid username or password");
        }
    };
  return (
    <div>
        <h1 id="heading">Login Page</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setName(e.target.value)}/>
        <br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <button onClick={clickLogin} >Login</button>
        {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage