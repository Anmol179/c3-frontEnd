import React from 'react'
import { SignUp } from '../Components/SignUp'
import { Login } from '../Components/Login'
import { Blogs } from '../Components/Blogs'
import {Routes,Route} from "react-router-dom";

export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
        </Routes>
    </div>
  )
}
