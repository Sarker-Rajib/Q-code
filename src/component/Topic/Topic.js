import React from 'react';

const Topic = ({ topic }) => {
   const { name, logo, total } = topic;

   return (
      <div className="col-md-6 col-xl-3">
         <div className="shadow rounded border">
            <div className="bg-info rounded">
               <img src={logo} alt={name} className="img-fluid" />
            </div>
            <div className="p-2">
               <h5>Topic: {name}</h5>
               <p className="mb-2">Quizes count: {total}</p>
               <button className="btn btn-info w-100 text-white">Take a test</button>
            </div>
         </div>
      </div>
   );
};

export default Topic;