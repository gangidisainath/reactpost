
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userhome from "./components/Userhome";
import CreatePost from "./components/CreatePost";
import Data from './components/Individualpost';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Loginpage } from './components/Loginpage';
import { Registerpage } from './components/Registerpage';
import { Home } from './components/Home';
import { Profile } from './components/Profile';

const App = () => (
  <Router>
    
    <div className="full">
    <Nav/>
    <div className="middle"> 
    
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/Userhome" element={<Userhome />} />
    <Route path="/create" element={<CreatePost />} />
    <Route path="/Login" element={<Loginpage />} />
    <Route path="/register" element={<Registerpage />} />
    <Route path=":id" element={<Data />} />
     </Routes>
    
    </div>
    
    <div className="footer">
    <Footer/>
    </div>
    </div>
  </Router>
);
export default App;
