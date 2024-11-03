import { Button, Form, Todo, TodoWrapper } from '@/pages/todo/Todo.styled'
import { Outlet } from 'react-router-dom'
import { BiSolidEditAlt, BiTrash } from 'react-icons/bi'

function TodoList() {
  return (
    <TodoWrapper.Layout>
      <TodoWrapper.Container>
        <Todo.Header>
          <h2>할 일 목록</h2>
          <Button.Add type="button">추가</Button.Add>
        </Todo.Header>
        <TodoWrapper.CardWrapper>
          <Todo.Card>
            <Form.Checkbox type="checkbox" />
            <TodoWrapper.ContentWrapper>
              <Todo.Title>타이틀</Todo.Title>
              <Todo.Content>내용</Todo.Content>
            </TodoWrapper.ContentWrapper>
            <Button.ButtonWrapper>
              <Button.IconButton type="button">
                <BiSolidEditAlt size={20} />
              </Button.IconButton>
              <Button.IconButton type="button">
                <BiTrash size={20} />
              </Button.IconButton>
            </Button.ButtonWrapper>
          </Todo.Card>
        </TodoWrapper.CardWrapper>
      </TodoWrapper.Container>
      <Outlet />
    </TodoWrapper.Layout>
  )
}

export default TodoList
