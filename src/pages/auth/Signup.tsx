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

function Signup() {
  return (
    <AuthLayout>
      <AuthContainer>
        <Title>회원가입</Title>
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
          <InputRow>
            <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
            <Input
              type="password"
              id="passwordConfirm"
              placeholder="비밀번호를 다시 입력하세요"
            />
          </InputRow>
          <Button type="submit">회원가입</Button>
        </FormWrapper>
      </AuthContainer>
    </AuthLayout>
  )
}

export default Signup
