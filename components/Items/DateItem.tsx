import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'

const DateItem = () => {
    const [date, setDate] = useState(new Date())
    const { data: session } = useSession()

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota']
    const months = [
        'Stycznia',
        'Lutego',
        'Marca',
        'Kwietnia',
        'Maja',
        'Czerwca',
        'Lipca',
        'Sierpnia',
        'Września',
        'Października',
        'Listopada',
        'Grudnia',
    ]
    const day = days[date.getDay()]
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const endOfYear: Date = new Date(year, 11, 31) 
    const diffTime: number = endOfYear.getTime() - date.getTime()
    const diffDays: number = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='pb-1 mb-1 border-b-[1px] border-mainColor text-secondaryColor text-center'>
                <h2 className='text-center text-xl md:text-2xl'>
                    Witaj
                    <br />
                    <span className='font-semibold'>{session?.user?.name}</span>
                </h2>
            </div>
            <div className='pb-1 mb-1 border-b-[1px] border-mainColor text-secondaryColor text-center'>
                <p className='text-center md:text-md w-[300px] md:w-[400px]'>
                    Zapoznaj się z mnogością funkcjonalności oferowanych przez{' '}
                    <span className='font-semibold'>ASYSTENTA PRODUCENTA PAPRYKI</span> wybierając konkretny moduł z paska
                    bocznego!
                </p>
            </div>
            <div className='mt-4 md:text-lg text-center font-medium ring-2 w-1/2 p-2 ring-white rounded-sm bg-white bg-opacity-50'>
                <p className=''>Dziś jest </p>
                <p className=''>
                    {date.getDate()} {month} {year}
                </p>
                <p className=''>{day}</p>
                <p className=''>
                    {hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:
                    {seconds < 10 ? '0' + seconds : seconds}
                </p>
            </div>
            <p className='font-semibold text-md mt-2 text-center'>Do końca roku pozostało: {diffDays} dni</p>
        </div>
    )
}

export default DateItem
