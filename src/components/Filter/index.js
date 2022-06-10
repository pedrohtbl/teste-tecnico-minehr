import Button from "../Button"
import { CustomDiv, FilterContainer } from "./style"
import { FaFilter } from "react-icons/fa"
import { useState } from "react";
import { Collapse } from "@mui/material";
import FilterBox from "../FilterBox";

const Filter = () =>{
    const [open,setOpen] = useState(false)

    return(
        <>
        <CustomDiv>
            <div>
                <h1>Dashboard</h1>
                <p>Desafio Técnico Frontend</p>
            </div>

            <FilterContainer>
                <Button onClick={()=> setOpen(!open)}> 
                    <FaFilter/>
                    Filtrar
                </Button>
                <Collapse in={open}>{<FilterBox/>}</Collapse>
            </FilterContainer>
        </CustomDiv>
        </>
    )
}

export default Filter