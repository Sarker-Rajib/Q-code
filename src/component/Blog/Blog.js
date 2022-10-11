import React from 'react';

const Blog = () => {
   return (
      <div className="container">
         <div className="item p-3 mb-3 border border-info mt-3 bg-light rounded shadow">
            <h5 className="pb-2">Q1. What is the purpose of react router ?</h5>
            <p><strong>Answer:</strong> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
         </div>
         <div className="item p-3 mb-3 border border-info bg-light rounded shadow">
            <h5 className="pb-2">Q2. How context api works ?</h5>
            <p><strong>Answer:</strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
         </div>
         <div className="item p-3 mb-3 border border-info bg-light rounded shadow">
            <h5 className="pb-2">Q3. What is the use of useHref?</h5>
            <p><strong>Answer:</strong> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
         </div>
      </div>
   );
};

export default Blog;