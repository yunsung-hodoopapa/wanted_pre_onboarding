import styled from "styled-components";

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  width: 80%;
  float: left;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    font-size: 0.5rem;
    margin: 0;
    height: 90%;
  }
`;

