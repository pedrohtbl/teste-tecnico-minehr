import { useState } from "react"
import Graphic from "../Graphic"
import { CustomUl } from "./style"
import { data } from "../../data"

const GraphicList = () =>{
    const [graphics, setGraphics] = useState(data)

    return (
        <>
        <CustomUl>
            {graphics.map((element,index) => <Graphic key={index} type={element.options.chart.type} content={element}/>)}
        </CustomUl>
        </>
    )
}

export default GraphicList