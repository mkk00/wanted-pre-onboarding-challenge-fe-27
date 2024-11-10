import { ChangeEvent, FormEvent, useState } from 'react'
import { TodoProps } from '@/interfaces/TodoProps'

export const useTodoForm = (initialValues: TodoProps, onSubmit: () => void) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleReset = () => {
    setValues(initialValues)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!values.title.trim()) {
      alert('제목은 필수 항목입니다.')
      return
    } else {
      onSubmit()
      setValues(initialValues)
    }
  }

  return {
    values,
    handleChange,
    handleSubmit,
    handleReset,
  }
}
