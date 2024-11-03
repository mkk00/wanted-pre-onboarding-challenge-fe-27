import {
  Button,
  Detail,
  Form,
  Todo,
  TodoWrapper,
} from '@/pages/todo/Todo.styled'
import { IoCloseOutline } from 'react-icons/io5'

const TodoDetail = () => {
  return (
    <TodoWrapper.Container>
      <Todo.Header>
        <h2>할 일 상세</h2>
        <Button.CloseButton type="button">
          <IoCloseOutline size={25} />
        </Button.CloseButton>
      </Todo.Header>
      <Form.FormWrapper>
        <Detail.DetailTitle>
          <Form.Label>제목</Form.Label>
          <Form.Input />
        </Detail.DetailTitle>
        <Detail.DetailContent>
          <Form.Label>내용</Form.Label>
          <Form.Textarea />
        </Detail.DetailContent>
        <Button.ButtonWrapper>
          <Button.FormButton>저장</Button.FormButton>
          <Button.FormButton variant="secondary">취소</Button.FormButton>
        </Button.ButtonWrapper>
      </Form.FormWrapper>
    </TodoWrapper.Container>
  )
}

export default TodoDetail
