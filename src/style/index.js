import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Montserrat', sans-serif;
}

:root{
    --dark-purple: #5D405C;
    --light-purple: #CEC6CE;
    --white: #FFFFFF;
    --gray-1: #F6F6F6;
    --gray-2: #E5E5E5;
    --gray-3: #828282;
    --dark-green: #19D7AA;
}

#root{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

button{
    cursor: pointer;
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
}
`