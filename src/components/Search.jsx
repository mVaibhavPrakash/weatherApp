import { useContext } from "react"
import { SearchContext } from "../hooks/SeachContext"


const Search = () =>{
    const [City,SetCity] = useContext(SearchContext)
    return(
        <input type="text" id='weatherCitySearch' value={City} onChange={(e) =>{e.preventDefault();setCity(e.target.value) }}/>
    )
}

export default Search;