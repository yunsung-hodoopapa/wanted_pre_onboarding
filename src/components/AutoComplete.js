import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { list } from '../constants/List';
import { ContentsWrap } from '../view/shared/ContentsWrap';
import { FONT_COLOR_BLACK } from '../constants/index';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  wrap: no-wrap;
`;

const SearchInput = styled.input`
  width: 30em;
  height: 1.9em;
  background-color: #ffffff;
  outline: none;
  font-size: 1em;
  z-index: 100;
`;
const ReusultWrapper = styled.div`
  width: 30.5em;
  height: 15em;
  border: 1px solid ${FONT_COLOR_BLACK};
  font-size: 1em;
  background-color: #ffffff;
  z-index: 100;
`;

const List = styled.li`
  padding: 5px 2px 5px 3px;
  margin-bottom: 5px;
  border-bottom: 1px solid #efefef;
  font-size: 1em;
  list-style: none;
`;

const AutoComplete = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleUserInput = useCallback(
    (keyword) => {
      setKeyword(keyword);
      setResults([]);
    },
    [keyword]
  );

  const searchResultHandler = (keyword) => {
    const data = list;
    const matched = data.filter((item) => matchItem(item, keyword));
    setResults(matched);
  };

  const matchItem = (item, keyword) => {
    const matchedNum = keyword
      .toLowerCase()
      .indexOf(item.toLowerCase().substring(0, keyword.length));
    if (keyword === '') {
      return false;
    } else {
      if (matchedNum >= 0) {
        return item;
      }
    }
  };

  const renderResults = results.map((item, index) => {
    return (
      <ul>
        <List key={index} item={item} onClick={() => handleUserInput(item)}>
          {item}
        </List>
      </ul>
    );
  });

  const handleInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchResultHandler(keyword);
    }
  };

  useEffect(() => {
    searchResultHandler(keyword);
  }, [keyword]);

  return (
    <ContentsWrap>
      <InputWrapper>
        <div>
          <SearchInput
            type={'text'}
            onChange={(e) => handleUserInput(e.target.value)}
            value={keyword}
            placeholder={
              '알파벳으로 시작하는 단어를 찾아보세요! 한글은 입력되지 않습니다!'
            }
            onKeyDown={handleInputKeyDown}
          />
        </div>
        {results.length > 0 ? (
          <ReusultWrapper>{renderResults}</ReusultWrapper>
        ) : null}
      </InputWrapper>
    </ContentsWrap>
  );
};

export default AutoComplete;
