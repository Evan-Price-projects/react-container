import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage/HomePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  return (<RouterProvider router={router} />)
}

export default App
