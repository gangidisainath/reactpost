import React, { useEffect, useState } from "react";
import { fetchPosts,deletePost, updatePost } from "../api";
import { Link, useNavigate} from "react-router-dom";


const Userhome = () => {
  const [posts, setPosts] = useState([]);
  const uname=localStorage.getItem('username');
  const nav = useNavigate();
    const u=localStorage.getItem('username');
    if (!u){
      nav('/');
    }
    useEffect(() => {
    const loadPosts=async () =>{
    fetchPosts(uname).then(response =>{
      setPosts(response || []);
     
    });          
  };
  loadPosts();}
  , []);
  const handleDelete=async (id)=>{
    try{
      await deletePost(id);
      fetchPosts(uname).then(response =>{
      setPosts(response || []);
    });}
    catch (error){
      alert(error);
    }

  };
  
  
  return (
    <>
    <div className="posts">
      <h1>Welcome {uname.toUpperCase()}</h1>
      <p >Want to create new post?
      <Link to="/create" >New Post</Link>
      <p>Total Posts = {posts.length}</p>
      </p>
      </div>
      
      <div class="list">{posts.length==0? <p style={{color:'black',textAlign:'center'}}>no posts</p>:posts.map((post,i) => (
        <div class="item">
        
        <ol><li key={post.id} value={i+1} className="card mb-3">
          <div className="card-body">
            
            <h5>{post.title}</h5>
            </div>
            <p>{post.description.substring(0, 50)}...</p>
 
            <Link to={`/${post.id}`} state={{post}} className="btn btn-info">Read More</Link>
            <div className="updatebuttons">
            <button onClick={()=>handleDelete(post.id)}>Delete</button>
            </div>
        
        </li>
        </ol>
        </div>
      ))}
      </div>
      </>
  );
};

export default Userhome;