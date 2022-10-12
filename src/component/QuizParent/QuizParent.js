import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const QuizParent = () => {
   const loadedData = useLoaderData();
   const quizSubjects = loadedData.data

   return (
      <div className="container pt-3">
         <div className="row gy-3">
            {
               quizSubjects.map((subject) => <Topic key={subject.id} topic={subject}></Topic>)
            }
         </div>
      </div>
   );
};

export default QuizParent;