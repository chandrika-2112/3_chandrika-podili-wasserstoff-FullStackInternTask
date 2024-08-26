/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useDate } from '../Utilities/useDate'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import '../index.css'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
  minTemp,
  maxTemp
}) => {
 
  // for dynamically updating the components
  const [icon, setIcon] = useState(sun)
  const { time } = useDate()
  const [unit, setUnit] = useState('Celsius')

  // Function to toggle temperature unit
  const toggleUnit = () => {
    setUnit(unit === 'Celsius' ? 'Fahrenheit' : 'Celsius')
  }

  // Converting temperature to Fahrenheit if needed
  const convertTemp = (temp) => {
    return unit === 'Celsius' ? temp : (temp * 9 / 5) + 32
  }

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])

  // Its the main Weather card with forecast and details
  return (
    <div className='w-[24rem] min-w-[23rem] h-[34rem] glassCard p-4 mt-2'>
      <div className='w-full p-2 flex justify-center items-center text-3xl font-semibold'>
          {conditions}
        </div>
        <hr className='bg-slate-600 my-2' />

      <div className='flex w-full just-center items-center gap-4 mt-4 mb-4'>
        <img src={icon} alt="weather_icon" className='w-[7rem] h-[7rem]'  />
        <p className='font-bold text-2xl flex justify-center items-center'>
          {convertTemp(temperature)} &deg;{unit === 'Celsius' ? 'C' : 'F'}
        </p>
      </div>
      <div className='font-bold text-center text-xl'>
        {place || 'N/A'}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>     {/* Current Date, time, day*/}
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{windspeed} km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity <p className='font-normal'>{humidity} gm/m&#179;</p></p>
      </div>
      
      {/* Minimum and Maximum Temperatues, Heat Index of current date */}
      <div className='w-full flex justify-between items-center p-3 mt-2'>
          <div className='flex-1 text-center p-2'>
            <p className='font-semibold text-lg'>Min Temp</p>
            <p className='text-lg'>{convertTemp(minTemp)} &deg;{unit === 'Celsius' ? 'C' : 'F'}</p>
          </div>
          <div className='flex-1 text-center p-2'>
            <p className='font-semibold text-lg'>Max Temp</p>
            <p className='text-lg'>{convertTemp(maxTemp)} &deg;{unit === 'Celsius' ? 'C' : 'F'}</p>
          </div>
      </div>
      <div className='w-full p-3  flex justify-between items-center'>
        <p className='font-semibold text-lg px-6'>Heat Index</p>
        <p className='text-lg px-14'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>

      {/* Toggling Between the Fahrenheit & Celsius units */}
      <button onClick={toggleUnit} className='mt-4 px-4 py-2 bg-yellow-500 rounded shadow text-white'>
        Toggle to {unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'}
      </button>
      
    </div>
  )
}

export default WeatherCard