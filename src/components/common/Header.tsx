import { useUserStore } from '@/store/useAuthStore'
import {
  HeaderWrapper,
  AuthWrapper,
  ButtonWrapper,
  AuthButton,
} from '@/styles/common.styled'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const logout = useUserStore((state) => state.logout)
  const user = useUserStore((state) => state.user)

  const handleLogout = () => {
    localStorage.removeItem('token')
    logout()
  }

  useEffect(() => {
    console.log(user)
  }, [])
  return (
    <HeaderWrapper>
      <AuthWrapper>
        {user ? (
          <ButtonWrapper>
            <p>{user.email}</p>
            <AuthButton type="button" onClick={handleLogout}>
              로그아웃
            </AuthButton>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            <AuthButton type="button" onClick={() => navigate('/auth/login')}>
              로그인
            </AuthButton>
            <AuthButton type="button" onClick={() => navigate('/auth/signup')}>
              회원가입
            </AuthButton>
          </ButtonWrapper>
        )}
      </AuthWrapper>
    </HeaderWrapper>
  )
}

export default Header
