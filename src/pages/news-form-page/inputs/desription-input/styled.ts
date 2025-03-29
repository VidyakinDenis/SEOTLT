import styled from "styled-components";

export const DescriptionInput = styled.textarea`
    border: 1px solid #c7c7c7;
    resize: none;
    width: 77%;
    height: 40vh;
    padding: 2%;
    border-radius: 20px;
    font-size: 15px;
    overflow: auto; 
    -ms-overflow-style: none;
    scrollbar-width: none;


    &::-webkit-scrollbar {
    display: none; 
    &::placeholder {
        font-size: 20px;
    }
`;
