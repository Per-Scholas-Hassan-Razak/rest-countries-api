import { createContext, useContext } from "react";
import type {  CountryBUContextProps } from "../types";

export const CountryBUContext = createContext<CountryBUContextProps | undefined>(undefined)

export const useCountryBackUp = () => {
    const context = useContext(CountryBUContext)
    if(!context){
        throw new Error('useCountryBackUp must be used inside CountryBUProvider')
    }
    return context;
}