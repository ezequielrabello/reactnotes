import styled from "styled-components";
import  backgrounImg  from "../../assets/coffeeImg.svg"

export const Container = styled.div`
    display: flex;

    height: 100vh;


    align-items: stretch;

`;

export const Forms = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        color: ${({theme}) => theme.COLORS.ORANGE};
        font-size: 48px;
        font-weight: 700;
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 14px;
        
    }

    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 24px;

        margin: 48px 0;
    }

    > input {
        margin-bottom: 8px;
    }

    > a {
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.ORANGE};
        font-size: 16px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgrounImg});
    background-repeat: no-repeat center center;
    background-size: cover;
`
