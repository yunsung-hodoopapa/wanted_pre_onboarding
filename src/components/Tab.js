import React, { useState } from 'react';
import styled from 'styled-components';
import { ContentsWrap } from '../view/Shared/ContentsWrap';
import { GREY, FONT_COLOR_BLACK } from '../constants/index';

const TabWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-evenly;
  padding: 1em;
`;

const ActiveTab = styled.button`
  background-color: #3fdec3;
  font-size: 1em;
  color: ${GREY};
  font-weight: 800;
  border: none;
`;

const NonActiveTab = styled.button`
  background-color: ${GREY};
  font-size: 1em;
  color: ${FONT_COLOR_BLACK};
  border: none;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tab = () => {
  const [isActive, setIsActive] = useState(0);

  const tabClickHandler = (index) => {
    setIsActive(index);
  };

  const menus = [
    { name: 'react', content: '리액트 튜토리얼' },
    { name: 'redux', content: '리덕스 튜토리얼' },
    { name: 'nodeJs', content: '노드JS 튜토리얼' },
  ];

  return (
    <ContentsWrap>
      <TabWrapper>
        {menus.map((menu, index) => (
          <MenuItem
            tabClickHandler={tabClickHandler}
            menu={menu}
            index={index}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        ))}
      </TabWrapper>
      <ul />
      <ContentsWrapper>{menus[isActive].content}</ContentsWrapper>
    </ContentsWrap>
  );
};

const MenuItem = ({ menu, index, tabClickHandler, isActive, setIsActive }) => {
  return (
    <>
      {isActive === index ? (
        <ActiveTab onClick={() => tabClickHandler(index)}>
          <p>{menu.name}</p>
        </ActiveTab>
      ) : (
        <NonActiveTab onClick={() => tabClickHandler(index)}>
          <p>{menu.name}</p>
        </NonActiveTab>
      )}
    </>
  );
};

export default Tab;
