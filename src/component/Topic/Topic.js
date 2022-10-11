import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
   const { id, name, logo, total } = topic;

   return (
      <div className="col-md-6 col-xl-3">
         <div className="shadow rounded border p-2">
            <div className="bg-info rounded">
               <img src={logo} alt={name} className="img-fluid" />
            </div>
            <div className="pt-2">
               <h5>Topic: {name}</h5>
               <p className="mb-2">Quizes count: {total}</p>
               <Link className="btn btn-info m-0 w-100 m-0 py-2 text-white" to={`/home/${id}`}>Take a test</Link>
            </div>
         </div>
      </div>
   );
};

export default Topic;