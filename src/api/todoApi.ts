import { TodoProps } from '@/interfaces/TodoProps'
import instance from '@/api/instance'

const getTodoApi = async () => {
  const response = await instance.get('/todos')
  return response.data.data
}

const getTodoByIdApi = async (id: string) => {
  const response = await instance.get(`/todos:${id}`)
  return response.data.data
}

const createTodoApi = async (formData: TodoProps) => {
  const response = await instance.post('/todos', formData)
  return response.data.data
}

const updateTodoApi = async (id: string) => {
  const response = await instance.put(`/todos:${id}`)
  return response.data.data
}

const deleteTodoApi = async (id: string) => {
  const response = await instance.delete(`/todos:${id}`)
  return response.data.data
}

export {
  getTodoApi,
  getTodoByIdApi,
  createTodoApi,
  updateTodoApi,
  deleteTodoApi,
}
