import { useCountryBackUp } from "../contexts/contexts"

const CountriesGrid = () => 
{
    const {countries} = useCountryBackUp();

    if(countries.length === 0) return <p>No Data available</p>
    return <>
    
    </>
}

export default CountriesGrid