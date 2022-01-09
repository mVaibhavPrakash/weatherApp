import { useContext,useState,useRef } from "react"
import { SearchContext } from "../hooks/SeachContext"
import '../css/search.css'
import searchCssChanger from "../js/searchCssChanger"

const Search = () =>{
    const clearData=(e) =>{
        setData('')
        setCity(data)
    }
    const [City,setCity] = useContext(SearchContext)
    const [data,setData] = useState('')
    const ref = useRef(null)
    return(
        <input type="text" ref={ref} id='weatherCitySearch' value={data} onKeyUp={(e) =>e.key=='Enter'? clearData(e) :null } onChange={(e)=>{e.preventDefault();setData(e.target.value)}} onFocus={e=>searchCssChanger(e,ref,true)} onBlur={e => searchCssChanger(e,ref,false)} placeholder="search by city....."/>
    )
}

export default Search;