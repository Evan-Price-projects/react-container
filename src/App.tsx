import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Authenticate from './Signup/Authenticate';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authenticate />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  return (<RouterProvider router={router} />)
}

export default App
