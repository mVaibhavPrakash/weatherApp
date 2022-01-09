import { useState,createContext } from "react";

export const SearchContext = createContext()

export const SearchContextProvider = ({children}) =>{
    const [City,setCity] = useState('')
    return(
        <SearchContext.Provider value={[City,setCity]}>
            {children}
        </SearchContext.Provider>
    )
}
