import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import { HomePageProvider } from './Hooks/HomePageProvider';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageProvider><HomePage/></HomePageProvider>
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  return (<RouterProvider router={router} />)
}

export default App
