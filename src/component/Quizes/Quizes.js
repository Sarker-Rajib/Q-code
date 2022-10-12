import React from 'react';
import QuizOptions from '../QuizOptions/QuizOptions';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quizes.css';

const Quizes = (quiz) => {
   const { question, options, correctAnswer } = quiz.quizes;
   // correctAnswer
   const questionSplit1 = question.split('<p>');
   const questionSplitted = questionSplit1[1].split('</p>');

   const notify = () => toast(`The correct answer is "${correctAnswer}"`);
   const correctAnswerToast = () => toast(`Congrats ! The answer is Correct`);
   const falseAnswerToast = () => toast(`The answer is incorrect, please try again !`);

   const answerToast = (input) => {
      const answer = correctAnswer;
      const userInput = input;
      if (answer === userInput) {
         correctAnswerToast();
      }
      else {
         falseAnswerToast();
      }
   };


   return (
      <div className="bg-info p-3 rounded mb-4 border border-primary text-white shadow">
         <div className="row">
            <div className="col-10">
               <h5>Question: {questionSplitted}</h5>
            </div>
            <div className="col-2 text-end">
               <EyeIcon onClick={notify} className="eye" />
            </div>
         </div>
         <div className="row g-2 pt-3">
            {
               options.map((option, index) => <QuizOptions key={index} option={option} question={question} answerToast={answerToast}></QuizOptions>)
            }
         </div>
         <ToastContainer
            position="top-center"
            autoClose={2000}
            closeOnClick
            pauseOnFocusLoss
            theme="dark"
         />
      </div>
   );
};

export default Quizes;