import {
  Button,
  Detail,
  Form,
  Todo,
  TodoWrapper,
} from '@/pages/todo/Todo.styled'
import { IoCloseOutline } from 'react-icons/io5'
import { useTodoForm } from '@/hooks/useTodoForm'
import { useNavigate, useParams } from 'react-router-dom'
import { createTodoApi, updateTodoApi } from '@/api/todoApi'
import useTodoStore from '@/store/useTodoStore'
import { useEffect } from 'react'

const TodoDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const isEdit = window.location.pathname.includes('edit')
  const getTodoList = useTodoStore((state) => state.getTodoList)
  const getTodoById = useTodoStore((state) => state.getTodoById)
  const idData = useTodoStore((state) => state.idData)
  const resetTodoList = useTodoStore((state) => state.resetTodoList)

  const onSubmit = async () => {
    console.log(isEdit)
    if ((id && isEdit) || (id && idData !== values)) {
      await updateTodoApi(id, {
        title: values.title,
        content: values.content,
      })
    } else {
      await createTodoApi({
        title: values.title,
        content: values.content,
      })
    }
    getTodoList()
    navigate('/')
  }

  const { values, setValues, handleChange, handleSubmit, handleReset } =
    useTodoForm(
      {
        title: '',
        content: '',
      },
      onSubmit,
    )

  useEffect(() => {
    if (id) getTodoById(id)
  }, [id, isEdit])

  useEffect(() => {
    if (
      idData.title &&
      (idData.title !== values.title || idData.content !== values.content)
    ) {
      setValues({
        title: idData?.title,
        content: idData?.content,
      })
    }
  }, [idData, setValues])

  useEffect(() => {
    if (!id) {
      handleReset()
    }
  }, [id])

  return (
    <TodoWrapper.Container>
      <Todo.Header>
        <h2>할 일 상세</h2>
        <Button.CloseButton
          type="button"
          onClick={() => {
            resetTodoList()
            navigate('/')
          }}
        >
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
          <Button.FormButton type="submit">
            {isEdit ? '수정' : '저장'}
          </Button.FormButton>
          <Button.FormButton
            type="button"
            $variant="secondary"
            onClick={() => {
              handleReset()
              navigate('/todos')
            }}
          >
            취소
          </Button.FormButton>
        </Button.ButtonWrapper>
      </Form.FormWrapper>
    </TodoWrapper.Container>
  )
}

export default TodoDetail
