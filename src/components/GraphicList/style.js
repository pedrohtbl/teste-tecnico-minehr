import styled from "styled-components"

export const CustomUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: center;
    margin-top: 45px;

    @media (min-width: 600px){
        justify-content: space-evenly;
    }
`