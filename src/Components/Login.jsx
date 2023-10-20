import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const navigate = useNavigate();

    const handleSubmit = async() =>{
        const body = {
            email,
            password
        }
        try {
            const res = await fetch ("http://localhost:8080/login",{
                method :"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:body
            })
            res = await res.json();
            localStorage.setItem("token",JSON.stringify(res.token));
            navigate("/blogs")
        } catch (error) {
            
        }
    }
  return (
    <div>
        <input type="text" placeholder='email' onChange={((e)=>setEmail(e.atrget.value))} />
        <input type="password" placeholder='email' onChange={((e)=>setPassword(e.atrget.value))} />
        <input type="submit" value={"Login"} onClick={handleSubmit} />
    </div>
  )
}
