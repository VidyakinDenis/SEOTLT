import styled from "styled-components";

export const DetailsOfNewsWrapper = styled.div`
  justify-self: center;
  margin: 2.5% auto;
  background-color: #d7d7d7;
  padding: 2.5% 2.5% 5% 5%;
  border-radius: 20px;
  width: 70%;
`;

export const NewsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    
`;

export const NewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const EditingButton = styled.button<{ img: string }>`
  height: 4vh;
  aspect-ratio: 1/1;
  background-image: url("${(props) => props.img}");
  background-size: 100%;
  background-position: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const NewsName = styled.h1`
  margin-bottom: 2%;
  margin-top: 0;
  font-size: 40px;
    word-break: break-all;

  &::first-letter {
    text-transform: uppercase;
  }
    
    @media(max-width: 850px){
        font-size: 23px;
    }
`;

export const NewsDate = styled.span`
  font-size: 15px;
  color: #a8a8a8;
    
    @media(max-width: 850px){
        font-size: 10px;
    }
`;

export const News = styled.p`
  margin-top: 5%;
  &::first-letter {
    text-transform: uppercase;
  }
`;
