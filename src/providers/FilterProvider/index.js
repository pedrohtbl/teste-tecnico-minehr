import { createContext, useContext, useState } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({children}) =>{
    const [filter,setFilter] = useState([])
    const [loading, setLoading] = useState(false)

    return(
        <FilterContext.Provider value={{filter, setFilter,loading, setLoading}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)