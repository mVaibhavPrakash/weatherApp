import { useState,useEffect,useContext } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from '../hooks/SeachContext';
import '../css/current.css'

const Current = () =>{

const [Refresh,setRefresh] = useState(true) 
const [Data,setData]=useState('')
const [City,setCity] = useContext(SearchContext)

useEffect(async () => {
  if(City!== ''){
    const currentWeatherData=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=208e4923a57a3da75fb729001682fc89`)
    setData(currentWeatherData)
  }
  else{
    const geo=navigator.geolocation
    let lat,lon
    geo.getCurrentPosition(async (position)=>{
      lat=position.coords.latitude
      lon=position.coords.longitude
      const currentWeatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=208e4923a57a3da75fb729001682fc89`)
      console.log(currentWeatherData)
      setData(currentWeatherData)
  })
  }
  

}, [Refresh,City])

return(
  <div id='weatherCurrentData'>
    <button aria-label='justify' title='Refresh' onClick={(e) =>{e.preventDefault();setRefresh(!Refresh)}}><FontAwesomeIcon icon={faSyncAlt}/></button>
    <h1>{Data ? Data.data.name : ''}</h1>
    <div id='data'>{Data ? Math.round(parseInt(Data.data.main.temp)-273.15): ''}</div>
  </div>
)
}

export default Current;