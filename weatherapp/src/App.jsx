import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Temperature from './components/Temperature'
import Hightlight from './components/Hightlight'

function App() {
  const [city, setCity] = useState("Kathmandu")
  const [weatherData, setweatherData] = useState("")
  const API_URL = `https://api.weatherapi.com/v1/current.json?key= d89adbb1e6bf493287982146241803&q=${city}}&aqi=no`
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        console.log(response.data)
        setweatherData(response.data)

      })
      .
      catch((e) => {
        console.log(e)
      })

  }, [city])


  return (
    <>
      <div className='bg-[#1F213A]'>   <h1 className="text-white w-full text-4xl flex justify-center items-center px-auto pt-20">My Weather App</h1>
        <div className=" h-screen  md:flex justify-center align-top overflow-auto" >
          <div className="sm:mt-10  sm:w-full md:mt-40 w-1/5 h-1/3">
            {weatherData && <Temperature setCity={setCity}
              stats={
                {
                  temp: weatherData.current.temp_c,
                  condition: weatherData.current.condition.text,
                  isDay: weatherData.current.is_day,
                  location: weatherData.location.name,
                  time: weatherData.location.localtime
                }
              }
            />}
          </div>



          <div className=" sm:w-full mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6">
            <h2 className="text-slate-200 text=2xl col-span-2">Today's Hightlights</h2>
            {
              weatherData &&
              <>
                <Hightlight stats={{
                  title: "Wind Status",
                  value: weatherData.current.wind_mph,
                  unit: "mph",
                  direction: weatherData.current.wind_dir
                }} />

                <Hightlight stats={{
                  title: "Humidity",
                  value: weatherData.current.humidity,
                  unit: "%",

                }} />
                <Hightlight stats={{
                  title: "Visibility",
                  value: weatherData.current.vis_miles,
                  unit: "miles",

                }} />
                <Hightlight stats={{
                  title: "Air pressure",
                  value: weatherData.current.pressure_mb,
                  unit: "mb",

                }} />
              </>
            }


          </div>
        </div>

      </div>

    </>
  )
}

export default App
