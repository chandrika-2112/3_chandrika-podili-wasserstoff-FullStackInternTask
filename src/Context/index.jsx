/* eslint-disable no-unused-vars */
import { useEffect, useContext, useState, createContext} from "react";
import axios from 'axios';

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({})  // stores current weather data
    const [values, setValues] = useState([])   // stores weather data for multiple time points
    const [place, setPlace] = useState('vijayawada')
    const [validPlace, setValidPlace] = useState('vijayawada');  
    const [thisLocation, setLocation] = useState('')

    // to Fetch weather data from API
    const fetchWeather = async() => {
       
        //console.log(import.meta.env.VITE_API_KEY);
        // API request options
        const options ={
            method : 'GET',
            url : 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params : {
                aggregateHours : '24',   // for last 24 hrs
                location : place,        // city name
                contentType : 'json',    // Response content type
                unitGroup : 'metric',    // use metric units(Celsius)
                shortColumnNames : 0,    // Full column names
            },

            headers : {
                'X-RapidAPI-Key' : import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host' : 'visual-crossing-weather.p.rapidapi.com'
            }
        }

        try{
            const response = await axios.request(options); // Make API request
            console.log(response.data)  

            // checking if response contains valid data
            const thisData = Object.values(response.data.locations)[0]
            
            if(thisData){
                // updating state with fetched data
                setLocation(thisData.address)
                setValues(thisData.values)
                setWeather(thisData.values[0] || {})
                setValidPlace(place); // Update valid place
            }
            else{
                throw new Error('Invalid city name');
            }
        }
        catch(e){
            console.error(e)
            alert("Please enter the valid city!!")
        }
    }

    
    // fetching the weather data whenver the city name changes
    useEffect(() => {
        fetchWeather()

    }, [place]);

    // Log values for debugging purposes
    useEffect(() => {
        console.log(values)
    }, [values])

    return(
        <StateContext.Provider value={{
            weather, 
            setPlace,
            values,
            thisLocation,
            place: validPlace
        }}>
            {children}
        </StateContext.Provider>
    )
}

// custom hook to use the StateContext
export const useStateContext = () => {
    return useContext(StateContext)
}