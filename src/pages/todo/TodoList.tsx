import { Button, Form, Todo, TodoWrapper } from '@/pages/todo/Todo.styled'
import { Outlet } from 'react-router-dom'
import { BiSolidEditAlt, BiTrash } from 'react-icons/bi'
import { Title } from '@/styles/common.styled'
import { useNavigate, useParams } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'
import { MouseEvent, useEffect } from 'react'
import useTodoStore from '@/store/useTodoStore'

function TodoList() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const getTodoList = useTodoStore((state) => state.getTodoList)
  const deleteTodoList = useTodoStore((state) => state.deleteTodoList)
  const data = useTodoStore((state) => state.data)

  const handleEditTodo = (e: MouseEvent<HTMLButtonElement>, itemId: string) => {
    e.stopPropagation()
    navigate(`/todos/${itemId}/edit`)
  }

  const handleDeleteTodo = (
    e: MouseEvent<HTMLButtonElement>,
    itemId: string,
  ) => {
    e.stopPropagation()
    deleteTodoList(itemId)
    getTodoList()

    if (itemId === id) navigate('/todos')
  }

  useEffect(() => {
    getTodoList()
  }, [])
  return (
    <PageLayout>
      <TodoWrapper.Layout>
        <Title>Todo List</Title>
        <TodoWrapper.Container>
          <Todo.Header>
            <h2>할 일 목록</h2>
            <Button.Add
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                navigate('/todos')
              }}
            >
              추가
            </Button.Add>
          </Todo.Header>
          <TodoWrapper.CardWrapper>
            {data.length > 0 ? (
              data.map((item) => (
                <Todo.Card
                  key={item.id}
                  onClick={() => navigate(`/todos/${item.id}`)}
                >
                  <Form.Checkbox type="checkbox" />
                  <TodoWrapper.ContentWrapper>
                    <Todo.Title>{item.title}</Todo.Title>
                    <Todo.Content>{item.content}</Todo.Content>
                  </TodoWrapper.ContentWrapper>
                  <Button.ButtonWrapper>
                    <Button.IconButton
                      type="button"
                      onClick={(e) => handleEditTodo(e, item.id)}
                    >
                      <BiSolidEditAlt size={20} />
                    </Button.IconButton>
                    <Button.IconButton
                      type="button"
                      onClick={(e) => handleDeleteTodo(e, item.id)}
                    >
                      <BiTrash size={20} />
                    </Button.IconButton>
                  </Button.ButtonWrapper>
                </Todo.Card>
              ))
            ) : (
              <p>할 일 목록이 비어있습니다.</p>
            )}
          </TodoWrapper.CardWrapper>
        </TodoWrapper.Container>
        <Outlet />
      </TodoWrapper.Layout>
    </PageLayout>
  )
}

export default TodoList
