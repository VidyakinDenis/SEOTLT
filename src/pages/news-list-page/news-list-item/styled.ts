import styled from "styled-components";

export const NewsListItemWrapper = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
    justify-self: center;
  font-family: "Poppins", sans-serif;
  background-color: #f4f4f4;
  margin-top: 1%;
  border: #d7d5d5 solid 1px;
  border-radius: 10px;
  padding: 1% 2%;
  display: flex;
  justify-content: space-between;
  min-width: 280px;
  cursor: pointer;
  @media (max-width: 850px) {
    padding: 10px;
    flex-direction: column;
  }
`;

export const EndOfCard = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10%;
  min-width: 276px;
  @media (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const NewsName = styled.a`
  text-align: start;
  text-decoration: none;
  color: #040404;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 28px;
  width: 60%;
  &:visited {
    color: #040404;
  }
  &::first-letter {
    text-transform: uppercase;
  }

  @media (max-width: 850px) {
    font-size: 15px;
    width: 100%;
  }
`;

export const NewsDate = styled.span`
  color: #a8a8a8;
  display: flex;
  text-align: end;
  margin-top: auto;
  font-size: 20px;
  @media (max-width: 850px) {
    margin: auto;
    font-size: 12px;
    text-align: center;
  }
`;

export const DeleteItemButton = styled.button`
  border: 1px #d7d5d5 solid;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #cecece;
  }
  @media (max-width: 850px) {
    width: 100%;
    margin-top: 1%;
    padding: 2px;
    font-size: 8px;
  }
`;
