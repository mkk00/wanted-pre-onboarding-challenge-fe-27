import {
  AuthLayout,
  AuthContainer,
  FormWrapper,
  InputRow,
  Label,
  Input,
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
            navigate('/todo')
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
    <AuthLayout>
      <AuthContainer>
        <Title>로그인</Title>
        <FormWrapper onSubmit={handleSubmit}>
          <div>
            <InputRow>
              <Label htmlFor="email">이메일</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 입력하세요"
                value={values.email}
                onChange={handleChange}
                onBlur={handleUnForcus}
              />
            </InputRow>
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </div>
          <div>
            <InputRow>
              <Label htmlFor="password">비밀번호</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                value={values.password}
                onChange={handleChange}
                onBlur={handleUnForcus}
              />
            </InputRow>
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </div>
          <Button type="submit">로그인</Button>
        </FormWrapper>
        <AuthSuggestion />
      </AuthContainer>
    </AuthLayout>
  )
}

export default Login
