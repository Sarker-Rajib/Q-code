import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tooltip, XAxis, YAxis, BarChart, Bar } from "recharts";

const Statistics = () => {
   const info = useLoaderData();
   const data = info.data;

   return (
      <div className="py-3">
         <div className="container-md text-center">
            <p className="pb-4">Statistics of Quix data in number</p>

            <BarChart width={350} height={300} data={data}>
               <Bar dataKey="total" fill="#8884d8" />
               <Tooltip />
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
            </BarChart>
         </div>
      </div>
   );
};

export default Statistics;