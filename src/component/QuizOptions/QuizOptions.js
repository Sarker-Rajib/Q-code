import React from 'react';

const QuizOptions = ({ option, question, answerToast }) => {

   return (
      <div className="col-md-6">
         <div className="bg-light rounded text-dark text-center p-2 h-100">

            <div className="form-check">
               <input onClick={() => answerToast(option)} className="form-check-input" type="radio" name={question} id={option} />
               <label className="form-check-label d-block" htmlFor={option}>
                  {option}
               </label>
            </div>
         </div>
      </div>
   );
};

export default QuizOptions;