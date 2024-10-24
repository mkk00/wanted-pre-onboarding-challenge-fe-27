import AuthSuggestion from '@/components/AuthSuggestion'
import {
  AuthLayout,
  AuthContainer,
  FormWrapper,
  InputRow,
  Label,
  Input,
  Button,
} from '@/pages/auth/Auth.styled'
import { Title } from '@/styles/common.styled'

function Login() {
  return (
    <AuthLayout>
      <AuthContainer>
        <Title>로그인</Title>
        <FormWrapper>
          <InputRow>
            <Label htmlFor="email">이메일</Label>
            <Input type="email" id="email" placeholder="이메일을 입력하세요" />
          </InputRow>
          <InputRow>
            <Label htmlFor="password">비밀번호</Label>
            <Input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
            />
          </InputRow>
          <Button type="submit">로그인</Button>
        </FormWrapper>
        <AuthSuggestion />
      </AuthContainer>
    </AuthLayout>
  )
}

export default Login
