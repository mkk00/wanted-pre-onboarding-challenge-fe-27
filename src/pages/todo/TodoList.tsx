import { Button, Form, Todo, TodoWrapper } from '@/pages/todo/Todo.styled'
import { Outlet } from 'react-router-dom'
import { BiSolidEditAlt, BiTrash } from 'react-icons/bi'
import { Title } from '@/styles/common.styled'
import { useNavigate } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'
import { useEffect } from 'react'
import useTodoStore from '@/store/useTodoStore'

function TodoList() {
  const navigate = useNavigate()
  const getTodoList = useTodoStore((state) => state.getTodoList)
  const data = useTodoStore((state) => state.data)

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
                    <Button.IconButton type="button">
                      <BiSolidEditAlt
                        size={20}
                        onClick={(e) => {
                          e.stopPropagation()
                          navigate(`/todos/${item.id}/edit`)
                        }}
                      />
                    </Button.IconButton>
                    <Button.IconButton type="button">
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
