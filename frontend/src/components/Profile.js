import { Link, useNavigate } from "react-router-dom"
import { deleteacc, deleteall } from "../api";



export const Profile= ()=>{
    
    const nav = useNavigate();
    const uname=localStorage.getItem('username');
    if (!uname){
      nav('/');
    }
    const handlebutton=async ()=>{
        await deleteall(uname);
        nav('/Userhome');
    };
    const handleLogout=async ()=>{
        localStorage.clear();
          const uname=localStorage.getItem('username');
          if (!uname){
            setTimeout(()=>nav("/",{replace:true}),0);
          }
        
         return (
          <>
          </>
         );
      
      };
      const handleDeleteacc=()=>{
        deleteacc();
        localStorage.clear();
        setTimeout(()=>nav("/",{replace:true}),0);
        return (<></>);
      };
    return (
        <>
        <h1>Username : {uname}</h1>
        <div className="homebuttons">
    <a onClick={()=>handlebutton()}>Delete All Posts</a>
    <a onClick={()=>handleLogout()}>Logout</a>
    <a onClick={()=>handleDeleteacc()}>Delete My Account</a>
    </div>
        </>
    )

};