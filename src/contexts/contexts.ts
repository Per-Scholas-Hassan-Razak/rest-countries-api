import { createContext, useContext, } from "react";
import type {  CountryBUContextProps, FilteredContextProps } from "../types";

export const CountryBUContext = createContext<CountryBUContextProps | undefined>(undefined)

export const useCountryBackUp = () => {
    const context = useContext(CountryBUContext)
    if(!context){
        throw new Error('useCountryBackUp must be used inside CountryBUProvider')
    }
    return context;
}



export const FilteredContext = createContext<FilteredContextProps | undefined>(undefined)

export const useFilter = () => {
    const context = useContext(FilteredContext)
    if(!context){
        throw new Error("useFilter must be used within a FileterContextProvider")
    }
    return context
}