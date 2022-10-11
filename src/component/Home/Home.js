import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
   const loadedData = useLoaderData();
   const quizSubjects = loadedData.data

   return (
      <div className="container">
         <div className="row">
            {
               quizSubjects.map((subject) => <Topic key={subject.id} topic={subject}></Topic>)
            }
         </div>
      </div>
   );
};

export default Home;