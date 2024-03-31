import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content" ;
`;

export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    
    
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
    
`; 

export const Menu = styled.ul`
    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    grid-area: menu;

    text-align: center;
    
    padding-top: 64px;

    > li {
        margin-bottom: 24px;
    }
`; 

export const Search = styled.div`
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    grid-area: search;
    
    padding: 64px;
`; 

export const Content = styled.div`
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    grid-area: content;
    padding: 0 64px;
    
    overflow-y: auto;
`; 

export const NewNote = styled(Link)`
    background: ${({theme}) => theme.COLORS.ORANGE};
    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    grid-area: newnote;

    display: flex;
    justify-content: center;
    align-items: center;



    > svg {
        margin-right: 8px;
    }

`;
