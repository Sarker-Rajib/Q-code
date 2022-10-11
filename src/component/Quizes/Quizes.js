import React from 'react';

const Quizes = (quiz) => {
   const {question, options, id, correctAnswer} = quiz.quizes;

   return (
      <div>
         <p>{question}</p>
         
      </div>
   );
};

export default Quizes;