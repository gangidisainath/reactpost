import { useState } from "react";
import { Login } from "../api";
import { useNavigate } from "react-router-dom";


export const Loginpage=() =>{
    const [uname,setuname]=useState("");
    const [upass,setupass]=useState("");
    const nav = useNavigate();
   
    const handlesubmit=async ()=>{
            await Login(uname,upass).then((r)=>{
               switch (r.msg){
                case 'username doesnot exist':
                    alert(r.msg);
                    nav('/Login');
                    break;
                case 'success':
                        localStorage.setItem('username',uname);
                        nav('/Userhome');
                        break;
                case 'wrong password':
                        alert(r.msg);
                        nav('/Login');
                        break;
               };

            });
        //Login(uname,upass).then(alert(l));
    };
    return (
        <><div class='login'>
            <h1>Login</h1>
        <input type='text' placeholder='uname' value={uname} onChange={(e) =>setuname(e.target.value)}></input><br></br>
        <input type='password' placeholder='upass' value={upass} onChange={(e) =>setupass(e.target.value)}></input><br></br>
        <button type='submit' onClick={()=>handlesubmit()}>submit</button>
        </div>
        </>
    );

    
};