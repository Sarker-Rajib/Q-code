import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './component/Main/Main';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import QuizField from './component/QuizField/QuizField';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },



        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
