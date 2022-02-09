import React from 'react';
import styled from 'styled-components';
import { ContentsWrap } from './Shared/ContentsWrap';
import { GREY } from '../constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #19553b;
  align-items: center;
  justify-content: center;
  color: ${GREY};
  font-size: 1.5em;
`;

const Home = () => {
  return (
    <ContentsWrap>
      <Wrapper>좌측의 탭 메뉴를 클릭해서 컴포넌트를 확인해보세요!</Wrapper>
    </ContentsWrap>
  );
};

export default Home;
