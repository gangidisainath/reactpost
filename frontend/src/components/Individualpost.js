import { useNavigate, useParams } from "react-router-dom";
import { fetchPost } from "../api";
import { useEffect, useState } from "react";
const Data= ()=>{
    const {id} =useParams();
    const [post,setpost]=useState({});
    const nav = useNavigate();
    const uname=localStorage.getItem('username');
    if (!uname){
      nav('/');
    }
    useEffect(() => {
        const loadPosts=async () =>{
        await fetchPost(id).then(response =>{
          setpost(response || []);
         
        });          
      };
      loadPosts();}
      , []);
        
  return (
    <>
    <div className="individualpost">
    <h1>POST</h1>
    <h2>POST ID: {post.id}</h2>
    <h2> Created on Date: {post.created_at && post.created_at.slice(0,10)}</h2>
    <h2> Created at Time: {post.created_at && post.created_at.slice(11,19)} IST</h2>
    
    <h1>Title : {post.title}</h1>
    <h2>Description:</h2><p> {post.description}</p>
    </div> 
  
    </>
  )
};
export default Data;
