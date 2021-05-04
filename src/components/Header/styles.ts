import styled from "styled-components";

export const Container = styled.div` 

    background:${props => props.theme.colors.background.primary};
    height: 4rem;
    display: flex;
    align-items: center;    
    padding: 2rem 4rem;
    border-bottom: 1px solid var(--gray-100);
    transition: all .5s linear;

    p{   
        margin-left: 2rem; 
        padding: 0.25rem 0 0.25rem 2rem; 
        border-left: 1px solid var(--gray-100); 
    } 

    span{

        margin-left: auto;
        text-transform: capitalize;
    }

`