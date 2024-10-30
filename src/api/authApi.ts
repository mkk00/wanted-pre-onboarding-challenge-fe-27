import { AuthProps } from '@/interfaces/AuthProps'
import instance from '@/api/instance'

const loginApi = async (formData: AuthProps) => {
  const response = await instance.post('/users/login', formData)
  return response.data
}

const signupApi = async (formData: AuthProps) => {
  const response = await instance.post('/users/create', formData)
  return response.data
}

export { loginApi, signupApi }
