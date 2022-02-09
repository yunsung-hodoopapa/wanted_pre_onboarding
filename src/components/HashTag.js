import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { ContentsWrap } from '../view/shared/ContentsWrap';
import { GREY, BACKGROUND_COLOR } from '../constants/index';

const HashTagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${GREY};
  border-radius: 4px;
`;
const TagHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5em;
  line-height: 20px;
  margin-right: 5px;
  padding: 3px;
  background-color: ${BACKGROUND_COLOR};
  border-radius: 5px;
  color: ${GREY};
  font-size: 1em;
`;
const Input = styled.input`
  display: inline-flex;
  width: 100%;
  margin: 10px;
  min-width: 6em;
  outline: none;
  border: none;
  cursor: text;
`;
const CloseBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.8em;
  height: 0.8em;
  margin-left: 10px;
  background-color: ${BACKGROUND_COLOR};
  border: none;
  border-radius: 50%;
  :hover {
    background-color: #d3959b;
  }
`;

const HashTag = () => {
  const [hashTag, setHashTag] = useState('');
  const [tagContainer, setTagContainer] = useState([]);

  const handleInputChange = (e) => {
    setHashTag(e.target.value);
  };
  const handleInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      setTagContainer([...tagContainer, hashTag]);
      setHashTag('');
    }
    if (tagContainer.length && e.keyCode === 8 && !hashTag.length) {
      setTagContainer(tagContainer.slice(0, tagContainer.length - 1));
    }
  };
  const handleRemoveTag = (index) => {
    setTagContainer(tagContainer.filter((item, i) => i !== index));
  };
  return (
    <ContentsWrap>
      <HashTagWrapper>
        {tagContainer.map((item, index) => {
          return (
            <TagHolder index={index} onClick={() => handleRemoveTag(index)}>
              {item}
              <CloseBtnWrap>
                <AiOutlineClose
                  index={index}
                  onClick={(index) => handleRemoveTag(index)}
                />
              </CloseBtnWrap>
            </TagHolder>
          );
        })}
        <Input
          value={hashTag}
          type="text"
          placeholder="태그를 입력하세요"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        ></Input>
      </HashTagWrapper>
    </ContentsWrap>
  );
};

export default HashTag;
