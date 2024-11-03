import {
  AuthWrapper,
  Form,
  Button,
  ErrorMessage,
} from '@/pages/auth/Auth.styled'
import { useForm } from '@/hooks/useForm'
import AuthSuggestion from '@/components/AuthSuggestion'
import { Title } from '@/styles/common.styled'
import { loginApi } from '@/api/authApi'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

function Login() {
  const navigate = useNavigate()

  const onSubmit = async () => {
    if (!errors || Object.keys(errors).length === 0)
      try {
        const res = await loginApi({
          email: values.email,
          password: values.password,
        })
        if (res) {
          alert(res.message)

          if (res.token) {
            localStorage.setItem('token', res.token)
            navigate('/')
          }
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response)
          alert(err.response.data.details)
      }
  }

  const { values, errors, handleChange, handleUnForcus, handleSubmit } =
    useForm(
      {
        email: '',
        password: '',
      },
      'login',
      onSubmit,
    )

  return (
    <AuthWrapper.Layout>
      <AuthWrapper.Container>
        <Title>로그인</Title>
        <Form.FormWrapper onSubmit={handleSubmit}>
          <div>
            <Form.InputRow>
              <Form.Label htmlFor="email">이메일</Form.Label>
              <Form.Input
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 입력하세요"
                value={values.email}
                onChange={handleChange}
                onBlur={handleUnForcus}
              />
            </Form.InputRow>
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </div>
          <div>
            <Form.InputRow>
              <Form.Label htmlFor="password">비밀번호</Form.Label>
              <Form.Input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                value={values.password}
                onChange={handleChange}
                onBlur={handleUnForcus}
              />
            </Form.InputRow>
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </div>
          <Button type="submit">로그인</Button>
        </Form.FormWrapper>
        <AuthSuggestion />
      </AuthWrapper.Container>
    </AuthWrapper.Layout>
  )
}

export default Login
