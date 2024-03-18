import React, { useState, useEffect } from 'react'

import Sun from '../../public/assets/icon/Sun.png'
import CloudSun from '../../public/assets/icon/CloudSun.png'
import Clouds from '../../public/assets/icon/Clouds.png'
import CloudFoggy from '../../public/assets/icon/CloudFoggy.png'
import CloudSnow from '../../public/assets/icon/CloudSnow.png'
import CloudWind from '../../public/assets/icon/CloudWind.png'
import CloudRain from '../../public/assets/icon/CloudRain.png'
import CloudThunder from '../../public/assets/icon/CloudThunder.png'

import Wind from '../../public/assets/icon/Wind.png'
import Humidity from '../../public/assets/icon/Humidity.png'
import Barometre from '../../public/assets/icon/Barometre.png'

function WeatherItem() {
	const [loading, setLoading] = useState(true)

	const [weatherData, setWeatherData] = useState<any>(null)
	const [forecastData, setForecastData] = useState<any>(null)
	const [currentDate, setCurrentDate] = useState('');


	useEffect(() => {
		const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API;
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
				setLoading(false)
			} catch (error) {
				console.error('Error fetching weather data:', error)
				setLoading(false)
			}
		}

		fetchWeatherData()

		const currentDate = new Date().toLocaleDateString('pl-PL', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
        }).replace(/^\w/, (c) => c.toUpperCase())
          .replace(/\b\w{3,}/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1));
        setCurrentDate(currentDate);
	}, [])

	const kelvinToCelsius = (kelvin: number) => {
		return (Math.round((kelvin - 273.15) * 2) / 2).toFixed(1)
	}

	const renderWeatherIcon = (weatherType: string, classNames: string) => {
		switch (weatherType) {
			case 'Clear':
				return <img src={Sun.src} className={classNames} />
			case 'Clouds':
				return <img src={CloudSun.src} className={classNames} />
			case 'Rain':
				return <img src={CloudRain.src} className={classNames} />
			case 'Snow':
				return <img src={CloudSnow.src} className={classNames} />
			case 'Mist':
				return <img src={CloudFoggy.src} className={classNames} />
			case 'Few clouds':
			case 'Scattered clouds':
			case 'Broken clouds':
				return <img src={Clouds.src} className={classNames} />
			case 'Windy':
				return <img src={CloudWind.src} className={classNames} />
			case 'Thunderstorm':
				return <img src={CloudThunder.src} className={classNames} />
			case 'Sleet':
				return <img src={CloudSnow.src} className={classNames} />
			default:
				return null
		}
	}

	const renderForecast = () => {
		if (!forecastData || !forecastData.list) return null;
	
		const currentDate = new Date().toISOString().split('T')[0];
	
		const forecastItems = forecastData.list
			.filter((item: { dt_txt: string }) => {
				const itemDate = item.dt_txt.split(' ')[0];
				return itemDate !== currentDate;
			})
			.filter((item: { dt_txt: string }) => item.dt_txt.includes('12:00:00'))
			.slice(0, 3)
			.map((item: { dt_txt: string; weather: { main: string }[]; main: { temp: number } }, index: number) => {
				const forecastDate = new Date(item.dt_txt);
				const dayOfWeek = forecastDate.toLocaleDateString('pl-PL', { weekday: 'long' });
				const capitalizedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
				
				return (
					<div key={index} className='w-full flex flex-row justify-between items-center py-2 '>
						<p className='w-20 text-left'>{capitalizedDayOfWeek}</p>
						{renderWeatherIcon(item.weather[0].main, 'w-8 h-7 filter drop-shadow-lg')}
						<p className='font-semibold'>{kelvinToCelsius(item.main.temp)}°C</p>
					</div>
				);
			});
	
		return <div className='w-full flex flex-col justify-between items-center mt-3'>{forecastItems}</div>;
	};
	

	return (
		<section className='container py-2 text-black'>
			<div className='flex justify-center items-center'>
				{loading ? (
					<p>Loading...</p>
				) : weatherData ? (
					<div className='w-full sm:w-[300px] mt-1 border-t-[1px] border-mainColor text-secondaryColor text-center '>
						<h2 className='text-center text-lg md:text-xl font-semibold mb-2 mt-1'>Prognoza pogody</h2>
						<div className='flex flex-col justify-around items-center w-full bg-white bg-opacity-50 ring-2 ring-white rounded-sm p-3'>
							<p className='text-lg md:text-xl font-semibold mb-5 text-secondaryColor'>Kozieniec</p>
							{renderWeatherIcon(weatherData.weather[0].main, 'w-28 filter drop-shadow-lg ')}
							<p className='mt-5 text-3xl font-bold'>{kelvinToCelsius(weatherData.main.temp)}°C</p>
							<p className='my-3'>{currentDate}</p>
							<div className='flex flex-row justify-between items-center'>
								<div className='flex flex-col justify-around items-center w-1/4 h-[120px] bg-white ring-gray-200 ring-1 rounded-md p-2'>
									<img src={Wind.src} alt="Ikona wiatru" className='w-2/3 my-2'/>
									<p className='text-sm font-medium'>{weatherData.wind.speed.toFixed(1)}<br/>m/s</p>
								</div>
								<div className='flex flex-col justify-around items-center w-1/4 h-[120px] bg-white ring-gray-200 ring-1 rounded-md p-2'>
									<img src={Humidity.src} alt="Ikona wilgotności powietrza" className='w-2/3 my-2 '/>
									<p className='text-sm font-medium'>{weatherData.main.humidity}<br/>%</p>
								</div>
								<div className='flex flex-col justify-around items-center w-1/4 h-[120px] bg-white ring-gray-200 ring-1 rounded-md p-2'>
									<img src={Barometre.src} alt="Ikona Barometru" className='w-2/3 my-2 '/>
									<p className='text-sm font-medium'>{weatherData.main.pressure}<br/>hPa</p>
								</div>
							</div>
							{renderForecast()}
						</div>
					</div>
				) : (
					<p className='mt-10 text-black text-center'>Nie udało się pobrać danych pogodowych!</p>

				)}
			</div>
		</section>
	)
}

export default WeatherItem
