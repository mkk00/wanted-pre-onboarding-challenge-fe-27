// store.ts
import { create } from 'zustand'
import { TodoListProps, TodoProps } from '@/interfaces/TodoProps'
import { getTodoApi, getTodoByIdApi } from '@/api/todoApi'

interface TodoStore {
  data: TodoListProps[]
  idData: TodoProps
  getTodoList: () => Promise<void>
  getTodoById: (id: string) => Promise<void>
}

const useTodoStore = create<TodoStore>((set) => ({
  data: [],
  idData: {
    title: '',
    content: '',
  },
  getTodoList: async () => {
    const response = await getTodoApi()
    if (response) {
      console.log(response)
      set({ data: response })
    }
  },
  getTodoById: async (id: string) => {
    const response = await getTodoByIdApi(id)
    set({ idData: response })
  },
}))

export default useTodoStore
