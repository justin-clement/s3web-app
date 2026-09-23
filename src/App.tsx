import './App.css'
import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// IMPORT PAGE COMPONENTS.
const RootLayout = lazy(() => import('./pages/RootLayout'))
const Home = lazy(() => import('./pages/Home'))
const AboutS3 = lazy(() => import('./pages/AboutS3'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDescription = lazy(() => import('./pages/ServiceDescription'))
const GetInTouch = lazy(() => import('./pages/GetInTouch'))
const SoftwareRequests = lazy(() => import('./pages/SoftwareRequests'))

// ASSEMBLE PAGE COMPONENTS INTO THE ROUTER.
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <AboutS3 /> }, 
      { path: 'services', element: <Services />}, 
      { path: 'services/:serviceName', element: <ServiceDescription /> }, 
      { path: 'requests', element: <SoftwareRequests /> },
      { path: 'contact', element: <GetInTouch /> }
    ]
  }
]);


function App() {
  
  return <RouterProvider router={router} /> 

}

export default App;