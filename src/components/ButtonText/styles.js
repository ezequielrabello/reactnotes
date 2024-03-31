import styled from "styled-components";

export const Container = styled.button`
    font-size: 16px;
    color: ${({theme, $isactive}) => $isactive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
    background: none;
    border: none;
    
    /* margin-bottom: 64px; */
    
    text-align: center;
    

`