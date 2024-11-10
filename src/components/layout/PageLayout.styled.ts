import styled from 'styled-components'

const PageWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;

  * {
    box-sizing: border-box;
  }
`

const Main = styled.main`
  padding-top: 30px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export { PageWrapper, Main }
