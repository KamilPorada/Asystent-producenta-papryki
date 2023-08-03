'use client'

import React, { useState, useEffect } from 'react'
import Header from '@/components/HomePage/Header'
import AboutUs from '@/components/HomePage/AboutUs'
import HeroSeedling from '@/components/HomePage/HeroSeedling'
import OurTools from '@/components/HomePage/OurTools'
import JoinToUs from '@/components/HomePage/JoinToUs'
import SectionTitle from '@components/UI/SectionTitle'
import MonthlyTradesAndOutgoingChart from '../components/Charts/Homee/MonthlyTradesAndOutgoingChart'
import Fertigations from '@components/HomePage/Fertigations'
import Operations from '@components/HomePage/Operations'
import CounterItem from '@components/HomePage/CounterItem'
import { useSession } from 'next-auth/react'
import { isPast, isToday } from 'date-fns'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import {
	faTruckFast,
	faHandshake,
	faFileInvoice,
	faMoneyCheckAlt,
	faSkullCrossbones,
	faDroplet,
	faBook,
} from '@fortawesome/free-solid-svg-icons'

interface PointOfSale {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	name: string
	address: string
	type: number
	latitude: number
	longitude: number
}

interface TradeOfPepper {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	pointOfSaleId: string
	date: string
	clas: number
	color: number
	price: number
	weight: number
	vatRate: number
	totalSum: number
}

interface Invoice {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	pointOfSale: string
	date: string
	invoiceNumber: string
	totalSum: number
	status: boolean
}

interface Outgoing {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	name: string
	category: number
	date: string
	price: number
	amount: number
	totalSum: number
	describe: string
}

interface Operation {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	date: string
	time: string
	pesticideType: number
	pesticideName: string
	pesticideDose: number
	liquidAmount: number
	waitingTime: number
	waitingTimeDate: string
	status: boolean
}

interface Fertigation {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	date: string
	fertilizerName: string
	numberOfTunnels: number
	fertilizerDosePerTunnel: number
	waterAmountPerTunnel: number
}

interface Note {
	_id: string
	creator: {
		_id: string
		email: string
		username: string
		image: string
	}
	date: string
	title: string
	content: string
}

type StateData = {
	allPoints: {
		id: number
		title: string
		length: number
		icon: IconDefinition
	}
	allTrades: {
		id: number
		title: string
		length: number
		icon: IconDefinition
	}
	allInvoices: {
		id: number
		title: string
		length: number
		icon: IconDefinition
	}
	allOutgoings: {
		id: number
		title: string
		length: number
		icon: IconDefinition
	}
	allOperations: {
		id: number
		title: string
		length: number
		icon: IconDefinition
	}
	allFertigations: {
		id: number
		title: string
		length: number
		icon: IconDefinition
	}
	allNotes: {
		id: number
		title: string
		length: number
		icon: IconDefinition
	}
}

const Home = () => {
	const [allPoints, setAllPoints] = useState<PointOfSale[]>([])
	const [allTrades, setAllTrades] = useState<TradeOfPepper[]>([])
	const [allInvoices, setAllInvoices] = useState<Invoice[]>([])
	const [allOutgoings, setAllOutgoings] = useState<Outgoing[]>([])
	const [allOperations, setAllOperations] = useState<Operation[]>([])
	const [allFertigations, setAllFertigations] = useState<Fertigation[]>([])
	const [allNotes, setAllNotes] = useState<Note[]>([])
	const [selectedOperations, setSelectedOperations] = useState<Operation[]>([])
	const [selectedFertigations, setSelectedFertigations] = useState<Fertigation[]>([])
	const [loading, setLoading] = useState(true)
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''

	const initialCounterData = [
		{
			id: 1,
			title: 'Punkty sprzedaży',
			length: 0,
			icon: faTruckFast,
		},
		{
			id: 2,
			title: 'Transakcje sprzedaży papryki',
			length: 0,
			icon: faHandshake,
		},
		{
			id: 3,
			title: 'Faktury',
			length: 0,
			icon: faFileInvoice,
		},
		{
			id: 4,
			title: 'Wydatki',
			length: 0,
			icon: faMoneyCheckAlt,
		},
		{
			id: 5,
			title: 'Zabiegi cheminizacyjne',
			length: 0,
			icon: faSkullCrossbones,
		},
		{
			id: 6,
			title: 'Zabiegi fertygacji',
			length: 0,
			icon: faDroplet,
		},
		{
			id: 7,
			title: 'Notatki',
			length: 0,
			icon: faBook,
		},
	]

	const [counterData, setCounterData] = useState(initialCounterData)

	const fetchPointsOfSale = async () => {
		try {
			const response = await fetch('/api/point-of-sale')
			const data = await response.json()

			const filteredPoints = data.filter((point: PointOfSale) => point.creator._id.toString() === userId.toString())

			setAllPoints(filteredPoints)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const fetchTradesOfPepper = async () => {
		try {
			const response = await fetch('/api/trade-of-pepper')
			const data = await response.json()

			const currentYear = new Date().getFullYear()
			const filteredTrades = data.filter((trade: TradeOfPepper) => {
				const tradeYear = new Date(trade.date).getFullYear()
				return trade.creator._id.toString() === userId.toString() && tradeYear === currentYear
			})

			setAllTrades(filteredTrades)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const fetchInvoices = async () => {
		try {
			const response = await fetch('/api/invoice')
			const data = await response.json()

			const filteredInvoices = data.filter((invoice: Invoice) => invoice.creator._id.toString() === userId.toString())

			const currentYear = new Date().getFullYear()
			const filteredInvoicesCurrentYear = filteredInvoices.filter((invoice: Invoice) => {
				const invoiceYear = new Date(invoice.date).getFullYear()
				return invoiceYear === currentYear
			})

			setAllInvoices(filteredInvoicesCurrentYear)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const fetchOutgoings = async () => {
		try {
			const response = await fetch('/api/outgoing')
			const data = await response.json()

			const currentYear = new Date().getFullYear()
			const filteredOutgoings = data.filter((outgoing: Outgoing) => {
				const outgoingYear = new Date(outgoing.date).getFullYear()
				return outgoing.creator._id.toString() === userId.toString() && outgoingYear === currentYear
			})

			setAllOutgoings(filteredOutgoings)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const fetchOperations = async () => {
		try {
			const response = await fetch('/api/operation')
			const data = await response.json()

			const filteredOperations = data.filter(
				(operation: Operation) => operation.creator._id.toString() === userId.toString()
			)

			const currentYear = new Date().getFullYear()
			const filteredOperationsCurrentYear = filteredOperations.filter((operation: Operation) => {
				const operationYear = new Date(operation.date).getFullYear()
				return operationYear === currentYear
			})

			const filteredOperationsNotExpired = filteredOperationsCurrentYear.filter((operation: Operation) => {
				if (operation.status === true) {
					return true
				} else {
					const operationDate = new Date(operation.date)
					return !isPast(operationDate) || isToday(operationDate)
				}
			})

			const sortedOperations = filteredOperationsNotExpired.sort((a: Operation, b: Operation) => {
				const dateA = new Date(a.date)
				const dateB = new Date(b.date)
				return dateA.getTime() - dateB.getTime()
			})

			const closestOperations = sortedOperations.slice(0, 5)

			setSelectedOperations(closestOperations)
			setAllOperations(filteredOperationsNotExpired)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const fetchFertigations = async () => {
		try {
			const response = await fetch('/api/fertigation')
			const data = await response.json()

			const filteredFertigations = data.filter(
				(fertigation: Fertigation) => fertigation.creator._id.toString() === userId.toString()
			)

			const currentYear = new Date().getFullYear()
			const filteredFertigationsCurrentYear = filteredFertigations.filter((fertigation: Fertigation) => {
				const fertigationYear = new Date(fertigation.date).getFullYear()
				return fertigationYear === currentYear
			})

			const sortedFertigations = filteredFertigationsCurrentYear.sort((a: Fertigation, b: Fertigation) => {
				const dateA = new Date(a.date)
				const dateB = new Date(b.date)
				return dateA.getTime() - dateB.getTime()
			})

			const closestFertigations = sortedFertigations.slice(0, 5)

			setAllFertigations(filteredFertigationsCurrentYear)
			setSelectedFertigations(closestFertigations)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const fetchNotes = async () => {
		try {
			const response = await fetch('/api/note')
			const data = await response.json()

			const filteredNotes = data.filter((note: Note) => note.creator._id.toString() === userId.toString())

			const currentYear = new Date().getFullYear()
			const filteredNotesCurrentYear = filteredNotes.filter((note: Note) => {
				const noteYear = new Date(note.date).getFullYear()
				return noteYear === currentYear
			})

			setAllNotes(filteredNotesCurrentYear)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		// Update counterData with actual lengths after data fetching is complete
		setCounterData(prevCounterData => [
			{
				...prevCounterData[0],
				length: allPoints.length,
			},
			{
				...prevCounterData[1],
				length: allTrades.length,
			},
			{
				...prevCounterData[2],
				length: allInvoices.length,
			},
			{
				...prevCounterData[3],
				length: allOutgoings.length,
			},
			{
				...prevCounterData[4],
				length: allOperations.length,
			},
			{
				...prevCounterData[5],
				length: allFertigations.length,
			},
			{
				...prevCounterData[6],
				length: allNotes.length,
			},
		])
	}, [
		allPoints.length,
		allTrades.length,
		allInvoices.length,
		allOutgoings.length,
		allOperations.length,
		allFertigations.length,
		allNotes.length,
	])

	useEffect(() => {
		fetchPointsOfSale()
		fetchTradesOfPepper()
		fetchInvoices()
		fetchOutgoings()
		fetchOperations()
		fetchFertigations()
		fetchNotes()
	}, [loading])

	if (!session?.user?.name) {
		return (
			<>
				<Header />
				<AboutUs />
				<HeroSeedling />
				<OurTools />
				<JoinToUs />
			</>
		)
	} else {
		return (
			<section className='container py-20 text-black'>
				<SectionTitle title={`Strona główna`} />
				{allPoints.length > 0 &&
				allInvoices.length > 0 &&
				allTrades.length > 0 &&
				allOutgoings.length > 0 &&
				allOperations.length > 0 &&
				allFertigations.length > 0 &&
				allNotes.length > 0 ? (
					<div className='flex flex-row justify-center flex-wrap gap-6 py-6'>
						{counterData.map(item => (
							<CounterItem key={item.id} title={item.title} length={loading ? 0 : item.length} icon={item.icon} />
						))}
						<MonthlyTradesAndOutgoingChart allTrades={allTrades} allOutgoings={allOutgoings} />
						<Fertigations allFertigations={selectedFertigations} />
						<Operations allOperations={selectedOperations} />
					</div>
				) : (
					<p className='mt-10 md:text-lg text-center'>Wczytywanie danych...</p>
				)}
			</section>
		)
	}
}

export default Home
