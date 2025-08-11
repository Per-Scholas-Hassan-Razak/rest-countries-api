import { useCountryBackUp } from "../contexts/contexts"

const CountriesGrid = () => 
{
    const {countriesBU} = useCountryBackUp();

    if(countriesBU.length === 0) return <p>No Data available</p>
    
    return <>
    {countriesBU.map((c) => 
        <p>{c.name}</p>
    )}
    </>
}

export default CountriesGrid