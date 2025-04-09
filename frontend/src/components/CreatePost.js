import React, { useState } from "react";
import { createPost } from "../api";

import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const nav = useNavigate();
  const uname=localStorage.getItem('username');
  if (!uname){
    nav('/');
  }
 
  const handleSubmit = async () => {
    
    try{ await createPost({'title':title,'description':description,'username':uname});
    nav("/Userhome");

    }
      
    catch (error){ console.log(error);}
   
  };

  return (
    <>
      
        <div className="login">
        <h1>Create Post</h1>
        <input type="text" className="form-control" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <textarea className="form-control mt-2" placeholder="description" onChange={(e) => setdescription(e.target.value)}></textarea>
        <button type='submit' onClick={()=>handleSubmit()}>Create</button>
        
        </div>
   
    </>
  );
};

export default CreatePost;