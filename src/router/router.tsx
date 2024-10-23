import { createBrowserRouter } from 'react-router-dom'
import { Home, Login, Signup } from '@/pages/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/auth/signup',
    element: <Signup />,
  },
])

export default router
