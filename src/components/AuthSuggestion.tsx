import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const AuthSuggestion = ({ isAuth }: { isAuth?: boolean }) => {
  return (
    <Suggestion>
      <span>{isAuth ? '이미 계정이 있으신가요?' : '계정이 없으신가요?'}</span>
      <AuthLink to={isAuth ? '/auth/login' : '/auth/signup'}>
        {isAuth ? '로그인' : '회원가입'}
      </AuthLink>
    </Suggestion>
  )
}

export default AuthSuggestion

const Suggestion = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  color: #666;
`

const AuthLink = styled(NavLink)`
  color: #4a90e2;
  margin-left: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
