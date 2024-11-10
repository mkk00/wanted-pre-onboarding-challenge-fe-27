interface TodoProps {
  title: string
  content: string
}

interface TodoListProps {
  title: string
  content: string
  id: string
  createdAt: string
  updatedAt: string
}

export type { TodoProps, TodoListProps }
