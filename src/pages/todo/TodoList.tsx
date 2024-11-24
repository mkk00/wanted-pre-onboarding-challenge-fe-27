import { Button, Form, Todo, TodoWrapper } from '@/pages/todo/Todo.styled'
import { Outlet } from 'react-router-dom'
import { BiSolidEditAlt, BiTrash } from 'react-icons/bi'
import { Title } from '@/styles/common.styled'
import { useNavigate, useParams } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'
import { MouseEvent, useEffect, useState } from 'react'
import useTodoStore from '@/store/useTodoStore'
import { useUserStore } from '@/store/useAuthStore'

function TodoList() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [selectIds, setSelectIds] = useState<string[]>([])

  const user = useUserStore((state) => state.user)
  const getTodoList = useTodoStore((state) => state.getTodoList)
  const deleteTodoList = useTodoStore((state) => state.deleteTodoList)
  const data = useTodoStore((state) => state.data)
  const resetTodoList = useTodoStore((state) => state.resetTodoList)

  const handleAddTodo = (e: MouseEvent<HTMLButtonElement>) => {
    if (!user?.token) {
      alert('로그인이 필요한 서비스입니다.')
      navigate('/auth/login')
    } else {
      e.stopPropagation()
      navigate('/todos')
    }
  }

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

  const handleSelectedDeleteTodo = () => {
    selectIds.forEach((item) => {
      deleteTodoList(item)
    })

    setSelectIds([])
    resetTodoList()
    getTodoList()
    navigate('/')
  }

  const handleCheckboxChange = (id: string) => {
    setSelectIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((selectedId) => selectedId !== id)
      } else {
        return [...prev, id]
      }
    })
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
            <Button.ButtonWrapper>
              {selectIds.length > 0 && (
                <Button.CommonButton
                  type="button"
                  onClick={handleSelectedDeleteTodo}
                >
                  선택 삭제
                </Button.CommonButton>
              )}
              <Button.CommonButton type="button" onClick={handleAddTodo}>
                추가
              </Button.CommonButton>
            </Button.ButtonWrapper>
          </Todo.Header>
          <TodoWrapper.CardWrapper>
            {data.length > 0 ? (
              data.map((item) => (
                <Todo.Card
                  key={item.id}
                  onClick={() => navigate(`/todos/${item.id}`)}
                >
                  <Form.Checkbox
                    type="checkbox"
                    checked={selectIds.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    onClick={(e) => e.stopPropagation()}
                  />
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
