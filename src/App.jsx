/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context'
import { BackgroundLayout, WeatherCard, MiniCard } from './components'

function App() {

  const [input, setInput] = useState('') // to manage searching cities
  const { weather, thisLocation, values, place, setPlace } = useStateContext()
  // console.log(weather)

  const submitCity = () => {
    setPlace(input) // to update with user's input
    setInput('')    // clear
  }
 
  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl mb-4'>Weather App</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input onKeyUp={(e) => {
            if (e.key === 'Enter') {
              // sumbit the city when enter key is pressed
              submitCity()
            }
          }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className=' flex flex-col md:flex-row justify-between gap-12 px-4 py-4 lg:px-[10%] '>
        {/* WeatherCard component displaying current weather*/}
        <WeatherCard
          place={place}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
          minTemp={weather.mint}
          maxTemp={weather.maxt}
        />
        
        {/* MiniCard components displaying forecast for the next few hours */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-[60%] px-1 py-12'>
          {
            values?.slice(1, 7).map(curr => {
              return (
                <MiniCard
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                  description={curr.conditions}
                />
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export default App
