'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useTopBar } from '../../components/contexts/TopBarContext';
import SectionTitle from '@components/UI/SectionTitle'
import TradeOfPepperTableHeader from '@components/Items/TradeOfPepperTableHeader'
import TradeOfPepperTableFooter from '@components/Items/TradeOfPepperTableFooter'
import TradeOfPepperItem from '@components/Items/TradeOfPepperItem'
import TradeOfPepperFilterItem from '@components/Items/TradeOfPepperFilterItem'
import ExcelJS from 'exceljs'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

interface TradeOfPepperFilters {
	dateFrom: string
	dateTo: string
	clas: number
	color: number
	pointOfSale: string
	vatRate: number
}

function TradesOfPepper() {
	const [allTrades, setAllTrades] = useState<TradeOfPepper[]>([])
	const [filteredTrades, setFilteredTrades] = useState<TradeOfPepper[]>([])
	const [showFilters, setShowFilters] = useState(false)
	const [loading, setLoading] = useState(true)
	const router = useRouter()
	const { data: session } = useSession()
	const userId = (session?.user as { id?: string })?.id ?? ''
	const { selectedYear } = useTopBar();

	const handleShowFilters = () => {
		setShowFilters(true)
	}

	const handleHideFilters = () => {
		setShowFilters(false)
	}

	const handleFilter = (filters: TradeOfPepperFilters) => {
		const { dateFrom, dateTo, clas, color, pointOfSale, vatRate } = filters

		const filteredItems = allTrades.filter(trade => {
			let matchesFilter = true

			if (dateFrom) {
				const tradeDate = new Date(trade.date)
				const fromDate = new Date(dateFrom)
				tradeDate.setHours(0, 0, 0, 0)
				fromDate.setHours(0, 0, 0, 0)
				if (tradeDate < fromDate) {
					matchesFilter = false
				}
			}

			if (dateTo) {
				const tradeDate = new Date(trade.date)
				const toDate = new Date(dateTo)
				tradeDate.setHours(0, 0, 0, 0)
				toDate.setHours(0, 0, 0, 0)
				if (tradeDate > toDate) {
					matchesFilter = false
				}
			}

			if (clas && trade.clas !== clas) {
				matchesFilter = false
			}

			if (color && trade.color !== color) {
				matchesFilter = false
			}

			if (vatRate !== -1 && trade.vatRate !== vatRate) {
				matchesFilter = false
			}

			if (pointOfSale && trade.pointOfSaleId !== pointOfSale) {
				matchesFilter = false
			}

			return matchesFilter
		})

		setFilteredTrades(filteredItems)
	}

	const getClassLabel = (index: number) => {
		if (index === 3) {
			return 'Krojona'
		}
		return index.toString()
	}

	const getColorLabel = (index: number) => {
		switch (index) {
			case 1:
				return 'Czerwona'
			case 2:
				return 'Żółta'
			case 3:
				return 'Zielona'
			case 4:
				return 'Pomarańczowa'
			case 5:
				return 'Blondyna'
			default:
				return ''
		}
	}

	const handleDelete = async (trade: TradeOfPepper) => {
		try {
			await fetch(`/api/trade-of-pepper/${trade._id.toString()}`, {
				method: 'DELETE',
			})

			const filteredTrades = allTrades.filter(item => item._id !== trade._id)

			toast.success('Pomyślnie usunięto transakcję sprzedaży papryki!', {
				position: toast.POSITION.TOP_CENTER,
			})
			setAllTrades(filteredTrades)
			setLoading(true)
		} catch (error) {
			console.log(error)
		}
	}

	const handleEdit = async (trade: TradeOfPepper) => {
		router.push(`/edit-trade-of-pepper?id=${trade._id}`)
	}

	const sortTradesByDate = (trades: TradeOfPepper[]) => {
		trades.sort((a, b) => {
			const dateA = new Date(a.date)
			const dateB = new Date(b.date)
			return dateA.getTime() - dateB.getTime()
		})
		return trades
	}

	const fetchTradesOfPepper = async () => {
		try {
			const response = await fetch('/api/trade-of-pepper')
			const data = await response.json()

			const filteredTrades = data.filter((trade: TradeOfPepper) => trade.creator._id.toString() === userId.toString())

			const filteredTradesCurrentYear = filteredTrades.filter((trade: TradeOfPepper) => {
				const tradeYear = new Date(trade.date).getFullYear()
				return tradeYear === selectedYear
			})

			const sortedTrades = sortTradesByDate(filteredTradesCurrentYear)

			setAllTrades(sortedTrades)
			setFilteredTrades(sortedTrades)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchTradesOfPepper()
	}, [loading, selectedYear])

	const exportToXLS = () => {
		const workbook = new ExcelJS.Workbook()
		const worksheet = workbook.addWorksheet('Transakcje papryki')

		const headerCellStyle = {
			font: { bold: true, color: { argb: 'FFFFFF' } },
			fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: '009000' } as ExcelJS.Color },
			alignment: { horizontal: 'center' as ExcelJS.Alignment['horizontal'] },
		}

		worksheet.addRow(['L.P.', 'Data', 'Klasa', 'Kolor', 'Cena', 'Waga', 'Stawka VAT', 'Suma', 'Punkt sprzedaży'])
		const headerRow = worksheet.getRow(1)
		headerRow.eachCell(cell => {
			cell.fill = headerCellStyle.fill as ExcelJS.FillPattern
			cell.font = headerCellStyle.font
			cell.alignment = headerCellStyle.alignment
		})

		filteredTrades.forEach((trade, index) => {
			const rowData = [
				(index + 1).toString(),
				getFormattedDate(trade.date),
				getClassLabel(trade.clas),
				getColorLabel(trade.color),
				trade.price.toString(),
				trade.weight.toString(),
				trade.vatRate.toString(),
				trade.totalSum.toString(),
				trade.pointOfSaleId,
			]
			worksheet.addRow(rowData)
		})

		worksheet.columns.forEach(column => {
			column.width = 15
		})

		workbook.xlsx.writeBuffer().then(buffer => {
			const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
			const url = URL.createObjectURL(blob)
			const link = document.createElement('a')
			link.href = url
			link.download = 'transakcje_papryki.xlsx'
			link.click()
		})
	}

	const getFormattedDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const year = date.getFullYear()
		return `${day}.${month}.${year}`
	}

	const calculateSum = () => {
		let totalSum = 0;
		let weightSum = 0;
	  
		filteredTrades.forEach(trade => {
		  totalSum += trade.totalSum;
		  weightSum += trade.weight;
		});
	  
		return { totalSum, weightSum };
	  };
	  
	  const { totalSum, weightSum } = calculateSum();

	if (loading) {
		return (
			<section className='container py-20'>
				<p className='mt-10 text-black text-center'>Wczytywanie danych...</p>
			</section>
		)
	}

	return (
		<section className='container py-20'>
			<SectionTitle title='Moje transakcje sprzedaży papryki' />
			{showFilters ? (
				<TradeOfPepperFilterItem handleFilter={handleFilter} handleCancel={handleHideFilters} />
			) : (
				<div className='flex flex-row justify-evenly sm:justify-end mt-2'>
					<button
						className='px-2 py-1 mr-3 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors'
						onClick={exportToXLS}>
						Eksport do XLS
					</button>
					<button
						className='px-2 py-1 rounded font-semibold bg-mainColor hover:bg-green-800 transition-colors'
						onClick={handleShowFilters}>
						Zastosuj filtry
					</button>
				</div>
			)}
			{filteredTrades.length > 0 ? (
				<div className='overflow-x-auto ring-1 ring-black mt-5'>
					<TradeOfPepperTableHeader />
					{filteredTrades.length > 0
						? filteredTrades.map((trade, index) => (
								<TradeOfPepperItem
									key={trade._id}
									index={index + 1}
									date={getFormattedDate(trade.date)}
									clas={getClassLabel(trade.clas)}
									color={getColorLabel(trade.color)}
									price={trade.price}
									weight={trade.weight}
									vatRate={trade.vatRate}
									totalSum={trade.totalSum}
									pointOfSale={trade.pointOfSaleId}
									handleDelete={() => handleDelete(trade)}
									handleEdit={() => handleEdit(trade)}
								/>
						  ))
						: ''}
						<TradeOfPepperTableFooter totalSum={totalSum} weightSum={weightSum} />
				</div>
			) : (
				<p className='mt-10 text-black text-center'>Brak transakcji sprzedaży papryki!</p>
			)}
		</section>
	)
}

export default TradesOfPepper
