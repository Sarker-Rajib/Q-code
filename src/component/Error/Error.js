import React from 'react';

const Error = () => {
   return (
      <div className="bg-warning vh-100 w-100 d-flex align-items-center justify-content-center">
         <div className="m-2 bg-danger p-3 rounded shadow-lg text-white text-center">
            <h3>The page you are requesting in not found</h3>
            <p>Please try the valid addres / url</p>
         </div>
      </div>
   );
};

export default Error;