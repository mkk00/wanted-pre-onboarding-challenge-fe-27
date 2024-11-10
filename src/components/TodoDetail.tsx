import {
  Button,
  Detail,
  Form,
  Todo,
  TodoWrapper,
} from '@/pages/todo/Todo.styled'
import { IoCloseOutline } from 'react-icons/io5'
import { useTodoForm } from '@/hooks/useTodoForm'
import { useNavigate } from 'react-router-dom'
import { createTodoApi } from '@/api/todoApi'
import useTodoStore from '@/store/useTodoStore'

const TodoDetail = () => {
  const navigate = useNavigate()
  const getTodoList = useTodoStore((state) => state.getTodoList)

  const onSubmit = async () => {
    const response = await createTodoApi({
      title: values.title,
      content: values.content,
    })

    console.log(response)
    if (response) {
      getTodoList()
      navigate('/')
    }
  }

  const { values, handleChange, handleSubmit, handleReset } = useTodoForm(
    {
      title: '',
      content: '',
    },
    onSubmit,
  )
  return (
    <TodoWrapper.Container>
      <Todo.Header>
        <h2>할 일 상세</h2>
        <Button.CloseButton type="button" onClick={() => navigate('/')}>
          <IoCloseOutline size={25} />
        </Button.CloseButton>
      </Todo.Header>
      <Form.FormWrapper onSubmit={handleSubmit}>
        <Detail.DetailTitle>
          <Form.Label htmlFor="title">제목</Form.Label>
          <Form.Input
            type="text"
            id="title"
            name="title"
            placeholder="제목을 입력하세요."
            value={values.title}
            onChange={handleChange}
          />
        </Detail.DetailTitle>
        <Detail.DetailContent>
          <Form.Label htmlFor="content">내용</Form.Label>
          <Form.Textarea
            id="content"
            name="content"
            placeholder="내용을 입력하세요."
            value={values.content}
            onChange={handleChange}
          />
        </Detail.DetailContent>
        <Button.ButtonWrapper>
          <Button.FormButton type="submit">저장</Button.FormButton>
          <Button.FormButton
            type="button"
            $variant="secondary"
            onClick={() => handleReset()}
          >
            취소
          </Button.FormButton>
        </Button.ButtonWrapper>
      </Form.FormWrapper>
    </TodoWrapper.Container>
  )
}

export default TodoDetail
