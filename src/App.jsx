import Home from './Home'
import Create from './Create'
import Update from './Update'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Update />} />

      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App