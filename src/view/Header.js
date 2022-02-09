import React from 'react';
import { useNavigate  } from 'react-router-dom';
import styled from 'styled-components';
import Container from './shared/Container';

const HeaderWrap = styled.header`
  background-color: #004225;
  width: 100%;
  height: 8rem;
  section {
    display: flex;
    background-color: #004225;
    color: #fee6ca;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
    cursor: grab;
    @media screen and (max-width: 500px) {
      padding: 0 0;
    }
  }
  @media screen and (max-width: 500px) {
    height: 5rem;
    padding: 1em;
  }
`;

const Title = styled.div`
  margin: 0.5em 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    disply: flex;
    width: 100%;
    font-size: 1rem;
    padding: 0.3em;
    margin: 0 0;
  }
`;
const Header = () => {
  const navigate = useNavigate();

  const reloadPageHandler = () => {
    navigate('/');
  };

  return (
    <HeaderWrap>
      <Container>
        <section>
          <Title
            onClick={reloadPageHandler}>Custom Component</Title>
        </section>
      </Container>
    </HeaderWrap>
  );
};

export default Header;
