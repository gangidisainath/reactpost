import { Link } from "react-router-dom"


export const Home=()=>{
    localStorage.clear();
    return (<>
    <div className="homebuttons">
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    </div>
    </>)

}