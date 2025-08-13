import { useMemo, useState, type ReactNode } from "react"
import { FilteredContext, useCountryBackUp } from "../contexts/contexts"

const FilteredProvider = ({children}:{children:ReactNode}) => {
    const { countriesBU } = useCountryBackUp();
    
    const[searchTerm, setSearchTerm] = useState<string>("")
    const[region, setRegion] = useState<string>("")
    const[regions, setRegions] = useState<string[]>([])

    


  const filteredCountries = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return countriesBU.filter((c) => {
      const matchesRegion = !region || c.region === region;
      const matchesSearch =
        !term ||
        c.name.toLowerCase().includes(term) ||
        c.capital?.toLowerCase().includes(term);
      return matchesRegion && matchesSearch;
    });
  }, [countriesBU, searchTerm, region]);

  useMemo(() => {
    const uniqueRegions = [...new Set(filteredCountries.map(c => c.region))].sort();
    setRegions(uniqueRegions);
  }, [filteredCountries]);

    return(
        <FilteredContext.Provider value={{regions, setRegions, searchTerm, setSearchTerm, region, setRegion, filteredCountries}} >
            {children}
        </FilteredContext.Provider>
    ) 
}

export default FilteredProvider