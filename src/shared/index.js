import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20em;
  height: 2em;
  border-radius: 2px;
  line-height: 20px;
  border: 1px solid grey;
`
export const EditableDiv = ({
  childRef,
  text,
  type,
  placeHolder,
  children,
  ...props
}) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (childRef && childRef.current && isEditing) {
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  const handleKeyDown = (e, type) => {
    const { key } = e;
    const keys = ['Escape', 'Tab'];
    const enterKey = 'Enter';
    const allkeys = [...keys, enterKey];

    if (
      (type === 'text' && key.indexOf(key) > -1) ||
      (type === 'text' && allkeys.indexOf(key) > -1)
    ) {
      setIsEditing(false);
    }
  };
  return (
    <Container {...props}>
      {isEditing ? (
        <div
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div onClick={() => setIsEditing(true)}>
          <span>{text || placeHolder || 'Editable Content'}</span>
        </div>
      )}
    </Container>
  );
};
