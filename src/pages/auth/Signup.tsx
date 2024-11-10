import { Container, Form, Button, ErrorMessage } from '@/pages/auth/Auth.styled'
import { useAuthForm } from '@/hooks/useAuthForm'
import AuthSuggestion from '@/components/auth/AuthSuggestion'
import { Title } from '@/styles/common.styled'
import { signupApi } from '@/api/authApi'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import PageLayout from '@/components/layout/PageLayout'

function Signup() {
  const navigate = useNavigate()

  const onSubmit = async () => {
    if (!errors || Object.keys(errors).length === 0)
      try {
        const res = await signupApi({
          email: values.email,
          password: values.password,
        })
        if (res) {
          alert(res.message)
          navigate('/auth/login')
        }
      } catch (err) {
        if (err instanceof AxiosError && err.response)
          alert(err.response.data.details)
      }
  }

  const { values, errors, handleChange, handleUnForcus, handleSubmit } =
    useAuthForm(
      {
        email: '',
        password: '',
        passwordConfirm: '',
      },
      'signup',
      onSubmit,
    )

  return (
    <PageLayout>
      <Container>
        <Title>회원가입</Title>
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
          <div>
            <Form.InputRow>
              <Form.Label htmlFor="passwordConfirm">비밀번호 확인</Form.Label>
              <Form.Input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="비밀번호를 다시 입력하세요"
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleUnForcus}
              />
            </Form.InputRow>
            {errors.passwordConfirm && (
              <ErrorMessage>{errors.passwordConfirm}</ErrorMessage>
            )}
          </div>
          <Button type="submit">회원가입</Button>
        </Form.FormWrapper>
        <AuthSuggestion isAuth />
      </Container>
    </PageLayout>
  )
}

export default Signup
