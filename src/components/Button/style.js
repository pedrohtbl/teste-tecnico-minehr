import styled from "styled-components"

export const CustomButton = styled.button`
    height: 40px;
    width: 100px;
    border-radius: 10px;
    background-color: var(--dark-purple);
    border: none;
    color: var(--gray-1);
    font-weight: 600;
    font-size: 14px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    :hover{
        opacity: 0.8;
    }
`