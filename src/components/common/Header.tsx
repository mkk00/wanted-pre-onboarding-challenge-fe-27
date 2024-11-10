import { useUserStore } from '@/store/useAuthStore'
import {
  HeaderWrapper,
  AuthWrapper,
  ButtonWrapper,
  AuthButton,
} from '@/styles/common.styled'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuListTodo } from 'react-icons/lu'

const Header = () => {
  const navigate = useNavigate()
  const logout = useUserStore((state) => state.logout)
  const user = useUserStore((state) => state.user)

  const handleLogout = () => {
    localStorage.removeItem('token')
    logout()
    navigate('/')
  }

  useEffect(() => {
    console.log(user)
  }, [user?.token])
  return (
    <HeaderWrapper>
      <AuthWrapper>
        <button
          type="button"
          style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
        >
          <LuListTodo size={25} /> My Todo
        </button>
        {user?.token ? (
          <ButtonWrapper>
            <p>{user.email}</p>
            <AuthButton
              type="button"
              onClick={() => {
                handleLogout()
                window.location.reload()
              }}
            >
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
