import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 1.8rem;
`

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #4a90e2;
  color: white;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
`

const AuthWrapper = styled.div`
  margin: 0 auto;
  width: 648px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const AuthButton = styled.button`
  color: white;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #357abd;
  }
`

export { Title, HeaderWrapper, AuthWrapper, ButtonWrapper, AuthButton }
