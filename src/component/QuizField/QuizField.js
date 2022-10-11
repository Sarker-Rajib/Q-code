import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const QuizField = () => {
   const quizData = useLoaderData();
   const {name, logo, questions} = quizData.data;
   
   return (
      <div className="container">
         <div className="quiz-header d-flex align-items-center justify-content-between pb-2">
            <div className="name">
               <h4>Topic : {name}</h4>
            </div>
            <div className="image">
               <img width="160" className="img-fluid bg-warning rounded" src={logo} alt={name} />
            </div>
         </div>
         <div>
            {
              questions.map(quiz => <Quizes key={quiz.id} quizes={quiz}></Quizes>)
            }
         </div>
      </div>
   );
};

export default QuizField;