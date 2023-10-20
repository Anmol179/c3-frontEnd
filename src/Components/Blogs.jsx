import React, { useState, useEffect } from 'react'
import axios from "axios"

export const Blogs = () => {
    const [data,setData] = useState([]);
    const token = localStorage.getItem("token");

    const getBlogs = async() =>{
        try {
            const res = await fetch(`http://localhost:8080/blogs`,{
                method:"GET",
                headers :{
                    "content-type":"application/json",
                    "authorization":"Bearer"+token,
                }
            })
            res = await res.json();
            setData(res);
        } catch (error) {
            console.log(error)
        }
    }


    const deleteBlog = async(id)=>{
        try {
            const res = await fetch(`http://localhost:8080/blogs`,{
                method:"DELETE",
                headers :{
                    "content-type":"application/json",
                    "authorization":"Bearer"+token,
                }
            })
            res = await res.json();
            setData(res);
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(()=>{
        getBlogs();
    },[data])


  return (
    <div>
            {data?.map((ele,ind)=>
            <div>
                <h1>{ele.title}</h1>
                <p>{ele.category}</p>
                <p>{ele.author}</p>
                <p>{ele.content}</p>
                {/* <button onClick={(()=>editBlog(ele._id))}>Edit</button> */}
                <button onClick={(()=>deleteBlog(ele.id))}>Delete</button>
            </div>
            )}
    </div>
  )
}
