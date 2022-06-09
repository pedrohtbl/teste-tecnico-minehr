import Button from "../Button"
import { CustomDiv } from "./style"
import { FaFilter } from "react-icons/fa"

const Filter = () =>{
    return(
        <CustomDiv>
            <div>
                <h1>Dashboard</h1>
                <p>Desafio Técnico Frontend</p>
            </div>
            <Button> 
                <FaFilter/>
                Filtrar
            </Button>
        </CustomDiv>
    )
}

export default Filter