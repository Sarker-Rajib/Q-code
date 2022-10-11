import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';

const Quizes = (quiz) => {
   const { id, question, options } = quiz.quizes;
   // correctAnswer
   const questionSplit1 = question.split('<p>');
   const questionSplitted = questionSplit1[1].split('</p>');

   return (
      <div className="bg-info p-3 rounded mb-4 border border-primary text-white shadow">
         <h5>Question: {questionSplitted}</h5>
         <div className="row g-2 pt-3">
            {
               options.map((option, index) => <QuizOptions key={index} option={option} question={question}></QuizOptions>)
            }
         </div>
      </div>
   );
};

export default Quizes;