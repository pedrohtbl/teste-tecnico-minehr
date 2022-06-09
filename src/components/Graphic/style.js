import styled from "styled-components"

export const CustomLi = styled.li`
    width: 320px;
    height: 209px;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    margin-bottom: 28px;

    section{
        position: absolute;
        margin-top: 20px;
      
    }

    section>div{
        width: 300px;
    }

    >div{
        display: flex;
        justify-content: space-between;
        height: 30px;
        padding-left:5%;
        align-items: center;
        position: relative;
    }

    div>svg{
        color: var(--dark-purple);
        font-size: 16px;
    }

    h2{
        font-weight: 700;
        color: var(--dark-purple);
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80px;
    }

    h2>svg{
        color: var(--dark-green);
    }

    @media (min-width: 728px){
        width: 680px;
        height: 379px;

        div>svg{
            color: var(--dark-purple);
            font-size: 21px;
        }

        section>div{
            width: 550px;
        }

        section{
        position: absolute;
        margin-top: 25px;
            margin-left: 50px;
        }   
    }
`