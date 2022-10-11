import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css' ;

const Navbar = () => {
   return (
      <div className="bg-light">
         <div className="container py-3">
            <div className="d-flex justify-content-between align-items-center">
               <div className="logo">
                  <p>Logo</p>
               </div>
               <div className="nav">
                  <Link to="/home">Home</Link>
                  <Link to="/home">Quiz</Link>
                  <Link to="/blog">Blog</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;