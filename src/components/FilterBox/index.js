import { Container } from "./style"
import { data } from "../../data"
import { useFilter } from "../../providers/FilterProvider"
import { useEffect } from "react"

const FilterBox = () =>{
    const {setFilter, loading, setLoading} = useFilter()

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(true)
        },1500)
    },[loading])

    const onChange = (event) =>{
        setLoading(false)
        const value = event.target.value
        const filtered = data.filter(item => item.options.chart.type === value)
        setFilter(filtered)
    }

    return(
        <Container>
            <li>
                <label>
                    <input type="radio" name="filtro" value="todos" onClick={onChange}/>    
                    Todos
                </label>
            </li>
            {data.map((item, index) => 
                <li key={index}>
                    <label>
                        <input type="radio" name="filtro" value={item.options.chart.type} onClick={onChange}/>    
                        {item.options.chart.type}
                    </label>
                </li>
            )}
        </Container>
    )
}

export default FilterBox