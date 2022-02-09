import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { EditableDiv } from '../shared';
import { ContentsWrap } from '../view/shared/ContentsWrap';
import { GREY, FONT_COLOR_BLACK } from '../constants/index';

const Wrapper = styled.div`
  width: 30em;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  width: 30em;
  margin: 2px 3px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  height: 2em;
  margin-right: 0.5rem;
  color: ${FONT_COLOR_BLACK};
  background-color: ${GREY};
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 25em;
  height: 7em;
  border: 1px solid ${GREY};
`;

const Input = styled.input`
  width: 23.5em;
  height: 2em;
  text-align: center;
`;

const ClickToEdit = () => {
  const [input, setInput] = useState({
    name: '',
    age: '',
  });

  const [result, setResult] = useState({
    name: '',
    age: '',
  });

  const { name, age } = input;

  const inputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleInputKeyDown = (e) => {
    const { name, value } = e.target;
    if (e.keyCode === 13) {
      setResult({
        ...result,
        [name]: value,
      });
    }
  };

  return (
    <ContentsWrap>
      <Wrapper>
        <Field>
          <Label>
            <p>name</p>
          </Label>
          <EditableDiv
            text={input.name}
            placeHolder={'write a name & press enter'}
            type="input"
            childRef={inputRef}
          >
            <Input
              ref={inputRef}
              type="text"
              name="name"
              placeholder="write a name & press enter"
              value={name}
              onChange={handleChange}
              onKeyDown={handleInputKeyDown}
            />
          </EditableDiv>
        </Field>
        <Field>
          <Label>age</Label>
          <EditableDiv
            text={input.age}
            placeHolder={'write a age & press enter'}
            type="input"
            childRef={inputRef}
          >
            <Input
              ref={inputRef}
              type="text"
              name="age"
              placeholder="write a age & press enter"
              value={age}
              onChange={handleChange}
              onKeyDown={handleInputKeyDown}
            />
          </EditableDiv>
        </Field>
        <ResultContainer>
          <label>이름</label>
          <span>{result.name}</span>
          <label>나이</label>
          <span>{result.age}</span>
        </ResultContainer>
      </Wrapper>
    </ContentsWrap>
  );
};

export default ClickToEdit;
