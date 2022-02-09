import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Sidebar from './Sidebar/Sidebar';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 1024px;
  height: 80vh;
  margin: 1rem 0;
  @media screen and (max-width: 500px) {
    max-width: 500px;
    min-width : 320px;
    height: 80vh;
    flex-direction: column;
    align-items: stretch;
  }
`;

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`;

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Center>
        <Sidebar />
        <Section
          children={children}
        />
      </Center>
    </AppContainer>
  );
}

export default Layout;