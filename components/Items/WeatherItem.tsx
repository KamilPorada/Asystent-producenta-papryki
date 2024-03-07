import React, { useState, useEffect } from 'react'
import Sun from '../../public/assets/icon/Sun.png'
import CloudSun from '../../public/assets/icon/CloudSun.png'
import Clouds from '../../public/assets/icon/Clouds.png'
import CloudFoggy from '../../public/assets/icon/CloudFoggy.png'
import CloudSnow from '../../public/assets/icon/CloudSnow.png'
import CloudWind from '../../public/assets/icon/CloudWind.png'
import CloudRain from '../../public/assets/icon/CloudRain.png'
import CloudThunder from '../../public/assets/icon/CloudThunder.png'

function WeatherItem() {
	const [loading, setLoading] = useState(true)

	const [weatherData, setWeatherData] = useState<any>(null)
	const [forecastData, setForecastData] = useState<any>(null)
	const [latitude, setLatitude] = useState<number>(0)
	const [longitude, setLongitude] = useState<number>(0)

	useEffect(() => {
		const API_KEY = '06ab3b2ba2fac212c63eb206d29a1be8'
		const CITY_NAME = 'Kozieniec'

		const fetchWeatherData = async () => {
			try {
				const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&lang=pl`
				const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&appid=${API_KEY}&lang=pl`

				const weatherResponse = await fetch(weatherUrl)
				const weatherData = await weatherResponse.json()

				const forecastResponse = await fetch(forecastUrl)
				const forecastData = await forecastResponse.json()

				setWeatherData(weatherData)
				setForecastData(forecastData)
				setLatitude(weatherData.coord.lat)
				setLongitude(weatherData.coord.lon)
				setLoading(false)
			} catch (error) {
				console.error('Error fetching weather data:', error)
				setLoading(false)
			}
		}

		fetchWeatherData()
	}, [])

	const kelvinToCelsius = (kelvin: number) => {
		return (Math.round((kelvin - 273.15) * 2) / 2).toFixed(1)
	}

	const renderWeatherIcon = (weatherType: string) => {
		switch (weatherType) {
			case 'Clear':
				return <img src={CloudFoggy.src} className='w-10'/>
			case 'Clouds':
				return <img src={CloudSun.src} className='w-10'/>
			case 'Rain':
				return <img src={CloudRain.src} className='w-10'/>
			case 'Snow':
				return <img src={CloudSnow.src} className='w-10'/>
			case 'Mist':
				return <img src={CloudFoggy.src} className='w-10'/>
			case 'Few clouds':
			case 'Scattered clouds':
			case 'Broken clouds':
				return <img src={Clouds.src} className='w-10'/>
			case 'Windy':
				return <img src={CloudWind.src} className='w-10'/>
			case 'Thunderstorm':
				return <img src={CloudThunder.src} className='w-10'/>
			case 'Sleet':
				return <img src={CloudSnow.src} className='w-10'/>
			default:
				return null
		}
	}

	const renderForecast = () => {
		if (!forecastData || !forecastData.list) return null

		// Obecna data w formacie "YYYY-MM-DD"
		const currentDate = new Date().toISOString().split('T')[0]

		const forecastItems = forecastData.list
			// Odrzucenie dzisiejszego dnia
			.filter((item: any) => {
				const itemDate = item.dt_txt.split(' ')[0]
				return itemDate !== currentDate
			})
			// Wybranie prognozy na 12:00 PM dla każdego dnia
			.filter((item: any) => item.dt_txt.includes('15:00:00'))
			// Wybranie prognozy na najbliższe 3 dni
			.slice(0, 3)
			.map((item: any, index: number) => (
				<div key={index}>
					<p>{item.dt_txt}</p>
					<p>{kelvinToCelsius(item.main.temp)}°C</p>
					{renderWeatherIcon(item.weather[0].main)}
				</div>
			))

		return <div>{forecastItems}</div>
	}

	return (
		<section className='container py-20 text-black'>
			<div>
				{loading ? (
					<p>Loading...</p>
				) : weatherData ? (
					<div>
						<h1>
							Pogoda w {weatherData.name}: {weatherData.weather[0].description}
						</h1>
						<h2>Temperatura: {kelvinToCelsius(weatherData.main.temp)}°C</h2>
						<h2>Temperatura odczuwalna: {kelvinToCelsius(weatherData.main.feels_like)}°C</h2>
						<p>Wilgotność: {weatherData.main.humidity}%</p>
						<p>Ciśnienie: {weatherData.main.pressure} hPa</p>
						<p>Prędkość wiatru: {weatherData.wind.speed.toFixed(1)} m/s</p>

						<p>Współrzędne geograficzne:</p>
						<p>Szerokość: {latitude}</p>
						<p>Długość: {longitude}</p>

						<h2>Prognoza na najbliższe 3 dni:</h2>
						{renderForecast()}
					</div>
				) : (
					<p>Nie udało się pobrać danych pogodowych</p>
				)}
			</div>
			la
			<div>'</div>
		</section>
	)
}

export default WeatherItem
