import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import './index.css';
import App from './App';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {path: "/",
   element: <App/>,
   errorElement: <NotFound/>,
   children:[
    {index:true, element: <Videos/>}, 
    {path:'videos', element: <Videos/>},
    {path:'videos/:keyword', element: <Videos/>},
    {path:'videos/watch/:videoId', element: <VideoDetail/>},

   ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);