import { ChangeEvent, FormEvent, useState } from 'react'
import { validateForm } from '@/utils/validateForm'

export const useForm = (
  initialValues: Record<string, string>,
  type: 'signup' | 'login',
  onSubmit: () => void,
) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleUnForcus = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (value) {
      const focusErrors = validateForm({ ...values, [name]: value }, type)

      if (focusErrors[name]) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: focusErrors[name],
        }))
      } else {
        setErrors((prevErrors) => {
          const { [name]: _, ...rest } = prevErrors
          return rest
        })
      }
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validateErrors = validateForm(values, type)

    if (Object.keys(validateErrors).length === 0) {
      onSubmit()
    } else if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors)
    }
  }

  return {
    values,
    errors,
    handleChange,
    handleUnForcus,
    handleSubmit,
  }
}
