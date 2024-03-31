import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "header" "content";
    

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    > main {
        overflow-y: auto;
        
        grid-area: content;
    }
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto 0;
    
    
    
    
    > header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-area: header;
        overflow-y: hidden;
        margin-bottom: 36px;

        a {
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }

    

    


    



`;