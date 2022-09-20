import React, { useState } from 'react'
import Card from './Card'
import { Form } from './Form'

const Weatherpanel = () => {
  let urlWeather =
    'https://api.openweathermap.org/data/2.5/weather?appid=9938c46b5474523387cba9219e40b7b6&lang=es'
  let cityUrl = '&q='

  let urlForecast =
    'https://api.openweathermap.org/data/2.5/forecast?appid=9938c46b5474523387cba9219e40b7b6&lang=es'

  const [weather, setWeather] = useState([])
  const [forecast, setForecast] = useState([])
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [location, setLocation] = useState('')

  //   funcion para hacer la llamada a la api
  const getLocation = async location => {
    setLoading(true)
    setLocation(location)
    // weather
    urlWeather = urlWeather + cityUrl + location

    await fetch(urlWeather)
      .then(response => {
        if (!response.ok) throw { response }
        return response.json()
      })
      .then(weatherData => {
        console.log(weatherData)
        setWeather(weatherData)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
        setShow(false)
      })

    // forecast
    urlForecast = urlForecast + cityUrl + location
    await fetch(urlForecast)
      .then(response => {
        if (!response.ok) throw { response }
        return response.json()
      })
      .then(forecastData => {
        console.log(forecastData)
        setForecast(forecastData)
        setLoading(false)
        setShow(true)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div>
      <Form newLocation={getLocation} />
      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      />
    </div>
  )
}

export default Weatherpanel
