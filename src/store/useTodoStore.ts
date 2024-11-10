// store.ts
import { create } from 'zustand'
import { TodoListProps } from '@/interfaces/TodoProps'
import { getTodoApi, createTodoApi } from '@/api/todoApi'

interface TodoStore {
  data: TodoListProps[]
  getTodoList: () => Promise<void>
  // addTodo: (todo: TodoListProps) => void
}

const useTodoStore = create<TodoStore>((set) => ({
  data: [],
  getTodoList: async () => {
    const response = await getTodoApi()
    if (response) {
      console.log(response)
      set({ data: response })
    }
  },
  // addTodo: (todo) =>
  //   set((state) => ({
  //     data: [...state.data, todo],
  //   })),
}))

export default useTodoStore
