import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  //width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid #a8a8a8;
  padding: 1% 3%;
`;

export const HeaderLogo = styled.button`
  cursor: pointer;
  font-size: 40px;
  border: none;
  background-color: transparent;
`;

export const PublicButton = styled.button`
  cursor: pointer;
  border: 1px solid #c7c7c7;
  border-radius: 15px;
  padding: 10px;

  &:hover {
    background-color: #cecece;
  }
`;
