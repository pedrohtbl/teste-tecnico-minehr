import styled from "styled-components"

export const CustomDiv = styled.div`
    display: flex;
    background-color: transparent;
    justify-content: space-between;
    padding: 0 3%;
    width: 100vw;
    height: 91px;
    align-items: center ;

    div{
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h1{
        font-weight: 700;
        font-size: 22px;
        color: var(--dark-purple);
    }

    p{
        font-weight: 500;
        font-size: 14px;
        color: var(--gray-3);
    }

    @media (min-width: 728px) {
        h1{
            font-size: 28px;
        }

        div{
            height: 59px;
        }
    }

`