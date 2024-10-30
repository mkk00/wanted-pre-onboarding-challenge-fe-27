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
import { signupApi } from '@/api/authApi'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

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
    useForm(
      {
        email: '',
        password: '',
        passwordConfirm: '',
      },
      'signup',
      onSubmit,
    )

  return (
    <AuthLayout>
      <AuthContainer>
        <Title>회원가입</Title>
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
          <div>
            <InputRow>
              <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
              <Input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="비밀번호를 다시 입력하세요"
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleUnForcus}
              />
            </InputRow>
            {errors.passwordConfirm && (
              <ErrorMessage>{errors.passwordConfirm}</ErrorMessage>
            )}
          </div>
          <Button type="submit">회원가입</Button>
        </FormWrapper>
        <AuthSuggestion isAuth />
      </AuthContainer>
    </AuthLayout>
  )
}

export default Signup
