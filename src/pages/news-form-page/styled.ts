import styled from "styled-components";

export const NewsFormPageWrapper = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 5%;
    gap: 20px;
    @media (max-width: 850px) {
        gap: 30px
    }
`;

export const InputBlock = styled.div``;

export const InputTitle = styled.h3`
    margin-top: 1%;
    font-size: 25px;
    margin-bottom: 1%;
`;

export const ErrorMessage = styled.div`
    color: red;
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
