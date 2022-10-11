import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = () => {
   const loadedData = useLoaderData();
   const quizSubjects = loadedData.data

   return (
      <div className="container">
         <div className="header rounded shadow">
            <div className="content">
               <h3>Take a test</h3>
               <h4>Justify Your Practice</h4>
            </div>
         </div>
         <div className="row">
            {
               quizSubjects.map((subject) => <Topic key={subject.id} topic={subject}></Topic>)
            }
         </div>
      </div>
   );
};

export default Home;