import { useState } from "react";
import { Register } from "../api";
import { useNavigate } from "react-router-dom";


export const Registerpage=() =>{
    const [uname,setuname]=useState("");
    const [upass,setupass]=useState("");
    const [upass1,setupass1]=useState("");
    const nav=useNavigate();
    const handlesubmit=async ()=>{
            await Register(uname,upass,upass1).then((r)=>{
               switch (r.msg){
                case 'username already exist':
                    alert(r.msg);
                    break;
                case 'registered':
                    nav('/Login');
                    break;
                case 'password doesnot match':
                    alert(r.msg);
                    break;
               }
            });
        //Login(uname,upass).then(alert(l));
    };
    return (
        <>
        
        <div className="login">
        <h1>Register</h1>
        <input type='text' placeholder='username' value={uname} onChange={(e) =>setuname(e.target.value)}></input><br></br>
        <input type='password' placeholder='password' value={upass} onChange={(e) =>setupass(e.target.value)}></input><br></br>
        <input type='password' placeholder='confirm password' value={upass1} onChange={(e) =>setupass1(e.target.value)}></input><br></br>
        
        <button type='submit' onClick={()=>handlesubmit()}>submit</button>
        </div>
        </>
    );

    
};