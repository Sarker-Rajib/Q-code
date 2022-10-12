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
               <h3>Practice And Learn</h3>
               <h4>Let's have a tour, answer the questions.</h4>
               <h3>It's a little practice that will memorize your old times.</h3>
            </div>
         </div>
         <div className="row gy-3">
            {
               quizSubjects.map((subject) => <Topic key={subject.id} topic={subject}></Topic>)
            }
         </div>
      </div>
   );
};

export default Home;