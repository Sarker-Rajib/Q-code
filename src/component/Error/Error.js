import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
   return (
      <div className="bg-warning vh-100 w-100 d-flex align-items-center justify-content-center">
         <div className="m-2 p-4 bg-light rounded border border-danger">
            <div className="bg-danger p-3 rounded shadow-lg text-white text-center">
               <h1>404</h1>
               <h3>The page you are requesting in not found</h3>
               <p className="pb-3">Please try the valid addres / url</p>
               <Link className="btn btn-warning text-white" to="/home">Return to Home</Link>
            </div>
         </div>
      </div>
   );
};

export default Error;