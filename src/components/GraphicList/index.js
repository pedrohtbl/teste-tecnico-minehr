import { useState } from "react"
import Graphic from "../Graphic"
import { CustomUl } from "./style"
import { data } from "../../data"
import { useFilter } from "../../providers/FilterProvider"
import { CircularProgress } from "@mui/material"

const GraphicList = () =>{
    const [graphics, setGraphics] = useState(data)
    const {filter} = useFilter()
    const {loading} = useFilter()

    return (
        <>
        <CustomUl>
            {!loading ? 
            <CircularProgress/> 
            :
            filter.length === 0 ? 
                graphics.map((element,index) => <Graphic key={index} type={element.options.chart.type} content={element}/>)
                :
                filter.map((element,index) => <Graphic key={index} type={element.options.chart.type} content={element}/>)
            }
        </CustomUl>
        </>
    )
}

export default GraphicList