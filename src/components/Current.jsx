import { useState,useEffect,useContext } from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from '../hooks/SeachContext';

const Current = () =>{

const [Refresh,setRefresh] = useState(true) 
const [Data,setData]=useState('')
const [City,setCity] = useContext(SearchContext)

useEffect(() => {
  if(City!== ''){
    const Data = async() =>{await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=208e4923a57a3da75fb729001682fc89`)
    const currentWeatherData=Data();
    setData(currentWeatherData)
  }
  }
  else{
    const geo=navigator.geolocation
    let lat,lon
    geo.getCurrentPosition(async (position)=>{
      lat=position.coords.latitude
      lon=position.coords.longitude
      const currentWeatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=208e4923a57a3da75fb729001682fc89`)
      setData(currentWeatherData)
  })
  }
  

}, [Refresh,City])

return(
  <div id='weatherCurrentData'>
    <div id='weatherCurrentData'>{Data ? Math.round(parseInt(Data.data.main.temp)-273.15): ''}</div>
    <button id='head-btn' aria-label='justify' title='Header' onClick={(e) =>{e.preventDefault();console.log('Refreshed');setRefresh(!Refresh)}}><FontAwesomeIcon icon={faSyncAlt}/></button>
  </div>
)
}

export default Current;