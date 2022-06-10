import { FilterProvider } from "./FilterProvider"

const Providers = ({children}) =>{
    return(
        <FilterProvider>
            {children}
        </FilterProvider>
    )
}

export default Providers