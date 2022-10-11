import React from 'react';

const QuizOptions = ({ option, question }) => {

   return (
      <div className="col-md-6">
         <div className="bg-light rounded text-dark text-center p-2 h-100">

            <div className="form-check">
               <input className="form-check-input" type="radio" name={question} id={option} />
               <label className="form-check-label d-block" htmlFor={option}>
                  {option}
               </label>
            </div>
         </div>
      </div>
   );
};

export default QuizOptions;