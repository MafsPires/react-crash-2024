import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index  element={<HomePage/>} />
    <Route path='/jobs' element={<JobPage/>} />
    <Route path='*' element={<NotFoundPage/>} /> {/* 404 page */}
  </Route>
  ),
);


const App = () => {
  return <RouterProvider router={router}/>
}

export default App
