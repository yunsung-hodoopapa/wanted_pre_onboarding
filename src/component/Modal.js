import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { ContentsWrap } from '../view/Shared/ContentsWrap';

const Container = styled.div`
  display: flex;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: traslate(-50%, -50%);
  max-height: 15em;
  width: 14em;
  padding: 2em;
  background-color: tomato;
  text-align: center;
  z-index: 1000;
`;

const Button = styled.button`
  width: 7em;
  height: 3em;
  border-radius: 5px;
  border : none;
  background-color: #F3EBE9;
  font-color: #8F8F8F;
  font-size: 1em;
  cursor: pointer;
`;


const CloseBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: traslate(-50%, -50%);
  width: 1.5em;
  height: 1.5em;
  background-color: #tomato;
  border: none;
  border-radius: 50%;
  :hover {
    background-color: #d3959b;
  }
  z-index: 2000;
`;

export default function Modal() {
  const [isModalShown, setIsModalShown] = useState(false);

  const preventModalOff = (e) => {
    e.stopPropagation();
  };

  const openModal = () => {
    setIsModalShown(true);
  };

  const closeModal = () => {
    setIsModalShown(false);
  };

  return (
    <ContentsWrap>
      {isModalShown && (
        <Background onClick={() => closeModal()}>
          <CloseBtnWrap>
            <AiOutlineClose onClick={() => closeModal} />
          </CloseBtnWrap>
          <ModalWrapper onClick={preventModalOff}>Hello!</ModalWrapper>
        </Background>
      )}
      <Button onClick={() => openModal()}> open </Button>
    </ContentsWrap>
  );
}
