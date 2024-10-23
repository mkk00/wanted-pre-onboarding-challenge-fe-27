import { ChangeEvent, useState } from 'react'

export const useForm = (initialValues: Record<string, string>) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const resetValues = () => setValues(initialValues)

  return { values, handleChange, resetValues }
}
