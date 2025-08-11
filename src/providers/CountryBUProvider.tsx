import { useState, type ReactNode } from "react"
import type { Country } from "../types"
import { CountryBUContext } from "../contexts/contexts";

const CountryBUProvider = ({children}:{children:ReactNode}) => {

const [countries, setCountries] = useState<Country[]>([]);
    
    return(
        <CountryBUContext.Provider value={{countries,setCountries}}>
            {children}
        </CountryBUContext.Provider>
    ) 
}

export default CountryBUProvider