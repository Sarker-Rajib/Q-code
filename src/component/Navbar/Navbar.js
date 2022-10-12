import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
   return (
      <div className="main-nav">
         <div className="container">
            <nav className="navbar navbar-expand-md  align-items-center justify-content-between">
               <h3 className="text-white">Q'Code Test</h3>

               <button className="navbar-toggler bg-light rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarScroll">
                  <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                     <li><Link className="nav-link" to="/home">Home</Link></li>
                     <li><Link className="nav-link" to="/quiz">Quiz</Link></li>
                     <li><Link className="nav-link" to="/statistics">Statistics</Link></li>
                     <li><Link className="nav-link" to="/blog">Blog</Link></li>
                     <li><Link className="nav-link" to="/404">404</Link></li>
                  </ul>

               </div>
            </nav>
         </div>
      </div>
   );
};

export default Navbar;