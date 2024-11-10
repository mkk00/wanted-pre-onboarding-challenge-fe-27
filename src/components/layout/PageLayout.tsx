import { ReactNode } from 'react'
import Header from '@/components/common/Header'
import { PageWrapper, Main } from '@/components/layout/PageLayout.styled'

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PageWrapper>
      <Header />
      <Main>{children}</Main>
    </PageWrapper>
  )
}

export default PageLayout
