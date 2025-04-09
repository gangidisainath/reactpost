import { Link, useSearchParams } from "react-router-dom";
import '../App.css'; 
import { useEffect, useState } from "react";
const Nav=()=>{
    const [user,setuser]=useState(localStorage.getItem('username')||null);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setuser(localStorage.getItem('username')||null);
        },0);
        return ()=>clearInterval(interval);
    },[]);
    return (
<>
<div className="nav">
<Link to="/">Home</Link>
{user && <Link to="/Profile">Profile</Link>}

</div>
</>
    );
};
export default Nav;