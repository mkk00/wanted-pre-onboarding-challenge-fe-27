import styled, { css } from 'styled-components'

const flexColumn = css`
  display: flex;
  flex-direction: column;
`

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

// wrapper
const Layout = styled.div`
  ${flexColumn}
  width: 650px;
  align-items: center;
  gap: 50px;
  padding: 50px 0;
  margin-bottom: 10px;
  min-height: 100vh;
  background-color: #f5f5f5;
`

const Container = styled.section`
  width: 100%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`

const CardWrapper = styled.div`
  ${flexColumn}
  gap: 1rem;
`

// header
const Header = styled.div`
  ${flexCenter}
  justify-content: space-between;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.5rem;
    color: #333;
  }
`

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  gap: 1rem;

  &:hover {
    background-color: #f8f8f8;
  }
`

// content
const ContentWrapper = styled.div`
  flex: 1;
`

const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #333;
`

const Content = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
  color: #666;
`

// Form
const FormWrapper = styled.form`
  ${flexColumn}
  gap: 1rem;
`

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`

const Label = styled.label`
  font-size: 0.9rem;
  color: #666;
`

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`

const Textarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`

// Detail
const DetailTitle = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`

const DetailContent = styled.div`
  ${flexColumn}
  gap: 1rem;
  margin-top: 1rem;
`

const EmptyDetail = styled.div`
  ${flexCenter}
  height: 100%;
  color: #666;
`

// Button
const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`

const CommonButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #357abd;
  }
`

const IconButton = styled.button`
  ${flexCenter}
  border: none;
  background-color: transparent;
  color: #666;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: #f5f5f5;
  }
`

const CloseButton = styled.button`
  ${flexCenter}
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`

const FormButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  width: 100%;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  border: none;

  ${({ $variant = 'primary' }) =>
    $variant === 'primary'
      ? `
        background-color: #4a90e2;
        color: white;
        &:hover {
          background-color: #357abd;
        }
      `
      : `
        background-color: #f5f5f5;
        color: #666;
        &:hover {
          background-color: #eee;
        }
      `}
`

export const TodoWrapper = {
  Layout,
  Container,
  ContentWrapper,
  CardWrapper,
}

export const Todo = {
  Header,
  Card,
  Title,
  Content,
}

export const Form = {
  FormWrapper,
  Checkbox,
  Label,
  Input,
  Textarea,
}

export const Detail = {
  DetailTitle,
  DetailContent,
  EmptyDetail,
}

export const Button = {
  ButtonWrapper,
  CommonButton,
  IconButton,
  CloseButton,
  FormButton,
}
