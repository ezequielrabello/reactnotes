import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background: ${({theme}) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;

        padding: 0 124px;

        svg {
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 24px;
        }
    }
`
export const Form = styled.div`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(3) {
        margin-top: 24px;
    }
`;


export const Avatar = styled.div`
    position: relative;

    width: 186px;
    height: 186px;

    margin: -85px auto 64px;
    

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        position: absolute;
        right: 7px;
        bottom: 7px;
        background-color: ${({theme}) => theme.COLORS.ORANGE};
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        }

    }
`