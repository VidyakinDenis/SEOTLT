import styled from 'styled-components';

export const NewsFormPageWrapper = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5%;
`;

export const InputBlock = styled.div`
  margin-bottom: 1%;
`;

export const InputTitle = styled.h3`
  margin-top: 1%;
  font-size: 25px;
  margin-bottom: 1%;
`;

export const ErrorMessage = styled.div`
  background-color: red;
`;

export const SubmitButton = styled.button`
  width: 81.5%;
  margin: auto;
  font-size: 15px;
  padding: 2% 0;
  border: 1px solid #c7c7c7;
  border-radius: 15px;
  &:hover {
    background-color: #cecece;
  }
`;
