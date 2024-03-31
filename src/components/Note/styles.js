import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    border: none;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    padding: 22px; 
    margin-bottom: 16px;

    

    h1 {
        flex: 1;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-weight: 700;
        font-size: 24px;
        text-align: left;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;