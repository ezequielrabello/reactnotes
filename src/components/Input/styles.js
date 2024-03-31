import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    
    margin-bottom: 8px;
    border-radius: 10px;

    > svg {
        margin-left: 16px;
    }

    > input {
        
        border: none;
        padding: 12px;
        /* width: 100%; */
        height: 56px;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        width: 100%;

       

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }
    }

`;