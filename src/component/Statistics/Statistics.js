import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tooltip, XAxis, YAxis, BarChart, Bar, ResponsiveContainer } from "recharts";

const Statistics = () => {
   const info = useLoaderData();
   const data = info.data;

   return (
      <div className="py-3">
         <div className="container-md text-center">
            <p className="pb-4">Statistics of Quiz data in number</p>

            <div className="row justify-content-center">
               <div className="col-md-8">
                  <div style={{ width: '100%', height: 450 }}>
                     <ResponsiveContainer>
                        <BarChart width={400} height={350} data={data}>
                           <Bar dataKey="total" fill="#8884d8" />
                           <Tooltip />
                           <XAxis dataKey="name" />
                           <YAxis />
                           <Tooltip />
                        </BarChart>
                     </ResponsiveContainer>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Statistics;