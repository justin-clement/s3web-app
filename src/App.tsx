import './App.css'
import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const RootLayout = lazy(() => import('./pages/RootLayout'))
const Home = lazy(() => import('./pages/Home'))
const AboutS3 = lazy(() => import('./pages/AboutS3'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutS3 /> }
    ]
  }
]);


function App() {
  
  return <RouterProvider router={router} /> 

}

export default App;
