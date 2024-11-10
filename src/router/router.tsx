import { createBrowserRouter } from 'react-router-dom'
import { TodoList, Login, Signup } from '@/pages/index'
import TodoDetail from '@/components/TodoDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoList />,
    children: [
      {
        path: '/todos',
        element: <TodoDetail />,
      },
      {
        path: '/todos/:id',
        element: <TodoDetail />,
      },
    ],
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
