/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

// custom hook to provide current date and time
export const useDate = () => {
    const locale = 'en'  // date & time formatting
    const [today, setDate] = useState(new Date()) // current date & time

    // Effect to update the current date & time every minute
    useEffect(() => {
        const timer = setInterval(() => {  
            setDate(new Date())  // update new date & time
        }, 60*1000)   //  1000 milliseconds = 1min

        return () => {
            clearInterval(timer)   // clearing the interval to avoid memory leaks
        };
    },[]);
 
    const day = today.toLocaleDateString(locale, {weekday: 'long'})  // current day
    const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {month: 'long'})}\n\n`
    const time = today.toLocaleDateString(locale, {hour: 'numeric', hour12: true, minute: 'numeric'})

    return {date, time}
}