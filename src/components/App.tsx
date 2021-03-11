import React from 'react';
import styled from 'styled-components'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LoginPage from './LoginPage.js'


const PageContainer = styled.div`
  background: #FFFFFF;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`


const App: React.FC = () => {
  return (
    <PageContainer>
      <LoginPage/>
    </PageContainer>
  )
};

export default App;
