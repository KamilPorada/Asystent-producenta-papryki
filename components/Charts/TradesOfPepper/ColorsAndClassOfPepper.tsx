import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import ChartArea from '@components/UI/ChartArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, fa2, fa3, faWeightHanging } from '@fortawesome/free-solid-svg-icons'

import red from '../../../public/assets/img/image_red_pepper.png'
import yellow from '../../../public/assets/img/image_yellow_pepper.png'
import green from '../../../public/assets/img/image_green_pepper.png'
import orange from '../../../public/assets/img/image_orange_pepper.png'
import blond from '../../../public/assets/img/image_blond_pepper.png'

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

interface Props {
	allTrades: TradeOfPepper[]
}

const ClassesOfPepper: React.FC<Props> = ({ allTrades }) => {
	const [monthlyWeights, setMonthlyWeights] = useState<number[]>([]);
    const [annualHarvest, setAnnualHarvest] = useState<number>(0);
    const [formattedAnnualHarvest, setFormattedAnnualHarvest] = useState<string>('');
    const [colorWeights, setColorWeights] = useState<number[]>([]);
    const [classWeights, setClassWeights] = useState<number[]>([]);
	const [colorChartData, setColorChartData] = useState<{ series: number[]; options: ApexCharts.ApexOptions }>({
        series: [],
        options: {
			chart: {
				type: 'donut',
			},
			plotOptions: {
				pie: {
					startAngle: 0,
					endAngle: 360,
				},
			},
			dataLabels: {
				enabled: false,
			},
			fill: {
				type: 'gradient',
			},
			legend: {
				formatter: function (val: string, opts: any) {
					const labels = ['Czerwona', 'Żółta', 'Zielona', 'Pomarańczowa', 'Blondyna']
					const seriesIndex = opts.seriesIndex

					const formattedLabel = labels[seriesIndex]
					const formattedValue = Number(opts.w.globals.series[seriesIndex]).toLocaleString('pl-PL')

					return `${formattedLabel} - ${formattedValue} kg`
				},
				position: 'bottom',
			},
			colors: ['#FF0000', '#DDDD00', '#008000', '#FFA500', '#F5DEB3'],
			tooltip: {
				enabled: true,
				y: {
					formatter: function (value: number, { seriesIndex }: any) {
						const labels = ['Czerwona', 'Żółta', 'Zielona', 'Pomarańczowa', 'Blondyna']
						const formattedValue = value.toLocaleString('pl-PL') + ' kg'

						return `${labels[seriesIndex]} - ${formattedValue}`
					},
				},
			},
		},
    });

    const [classChartData, setClassChartData] = useState<{ series: number[]; options: ApexCharts.ApexOptions }>({
        series: [],
        options: {
			chart: {
				type: 'donut',
			},
			plotOptions: {
				pie: {
					startAngle: 0,
					endAngle: 360,
				},
			},
			dataLabels: {
				enabled: false,
			},
			fill: {
				type: 'gradient',
			},
			legend: {
				formatter: function (val: string, opts: any) {
					const labels = ['Klasa 1', 'Klasa 2', 'Klasa 3 (krojona)']
					const seriesIndex = opts.seriesIndex

					const formattedLabel = labels[seriesIndex]
					const formattedValue = Number(opts.w.globals.series[seriesIndex]).toLocaleString('pl-PL')

					return `${formattedLabel} - ${formattedValue} kg`
				},
				position: 'bottom',
			},
			colors: ['#00b000', '#0022ff', '#262626'],
			tooltip: {
				enabled: true,
				y: {
					formatter: function (value: number, { seriesIndex }: any) {
						const labels = ['Klasa 1', 'Klasa 2', 'Klasa 3 (krojona)']
						const formattedValue = value.toLocaleString('pl-PL') + ' kg'

						return `${labels[seriesIndex]} - ${formattedValue}`
					},
				},
			},
		},
    });

	useEffect(() => {
        const calculateMonthlyWeights = (trades: TradeOfPepper[]): number[] => {
            const monthlyWeights: number[] = [0, 0, 0, 0, 0, 0]

            trades.forEach(trade => {
                const month = new Date(trade.date).getMonth()

                if (month >= 5 && month <= 10) {
                    monthlyWeights[month - 5] += trade.weight
                }
            })

            return monthlyWeights.map(weight => parseFloat(weight.toFixed(2)))
        }

        const calculateColorWeights = (trades: TradeOfPepper[]): number[] => {
			const colorWeights: { [color: number]: number } = {}
	
			trades.forEach(trade => {
				const color = trade.color
				const weight = trade.weight
	
				if (colorWeights[color]) {
					colorWeights[color] += weight
				} else {
					colorWeights[color] = weight
				}
			})
	
			const colorWeightValues = Object.values(colorWeights)
	
			return colorWeightValues
		}
	
		const calculateClassWeights = (trades: TradeOfPepper[]): number[] => {
			const classWeights: { [clas: number]: number } = {}
	
			trades.forEach(trade => {
				const clas = trade.clas
				const weight = trade.weight
	
				if (classWeights[clas]) {
					classWeights[clas] += weight
				} else {
					classWeights[clas] = weight
				}
			})
	
			const classWeightValues = Object.values(classWeights)
	
			return classWeightValues
		}

        const monthlyWeights = calculateMonthlyWeights(allTrades);
        const annualHarvest = monthlyWeights.reduce((total, weight) => total + weight, 0);
        const formattedAnnualHarvest = annualHarvest.toLocaleString('pl-PL');
        const colorWeights = calculateColorWeights(allTrades);
        const classWeights = calculateClassWeights(allTrades);

        setMonthlyWeights(monthlyWeights);
        setAnnualHarvest(annualHarvest);
        setFormattedAnnualHarvest(formattedAnnualHarvest);
        setColorWeights(colorWeights);
        setClassWeights(classWeights);

        setColorChartData(prevData => ({
            ...prevData,
            series: colorWeights
        }));

        setClassChartData(prevData => ({
            ...prevData,
            series: classWeights
        }));

    }, [allTrades]);

	return (
		<>
			<ChartArea className='w-full md:w-[340px] h-[420px]'>
				<div className='flex flex-col px-2 w-full gap-2'>
					<p className='font-semibold text-center'>
						Zbiory papryki w bieżącym sezonie w zależności od jej koloru oraz klasy w liczbach
					</p>
					{colorWeights[0] > 0 && (
						<div className='flex flex-row justify-between items-center py-[px] border-b border-solid border-gray-400'>
							<div className='flex flex-row items-center'>
								<img src={red.src} alt='ikona czerwonej papryki' className='w-6 mr-3' />
								<p>Papryka czerwona</p>
							</div>
							<p className='justify-self-end'>{colorWeights[0]?.toLocaleString('pl-PL') + ' kg'}</p>
						</div>
					)}
					{colorWeights[1] > 0 && (
						<div className='flex flex-row justify-between items-center py-[px] border-b border-solid border-gray-400'>
							<div className='flex flex-row items-center'>
								<img src={yellow.src} alt='ikona żółtej papryki' className='w-6 mr-3' />
								<p>Papryka żółta</p>
							</div>
							<p className='justify-self-end'>{colorWeights[1]?.toLocaleString('pl-PL') + ' kg'}</p>
						</div>
					)}
					{colorWeights[2] > 0 && (
						<div className='flex flex-row justify-between items-center py-[px] border-b border-solid border-gray-400'>
							<div className='flex flex-row items-center'>
								<img src={green.src} alt='ikona zielonej papryki' className='w-6 mr-3' />
								<p>Papryka zielona</p>
							</div>
							<p className='justify-self-end'>{colorWeights[2]?.toLocaleString('pl-PL') + ' kg'}</p>
						</div>
					)}
					{colorWeights[3] > 0 && (
						<div className='flex flex-row justify-between items-center py-[px] border-b border-solid border-gray-400'>
							<div className='flex flex-row items-center'>
								<img src={orange.src} alt='ikona pomarańczowej papryki' className='w-6 mr-3' />
								<p>Papryka pomarańczowa</p>
							</div>
							<p className='justify-self-end'>{colorWeights[3]?.toLocaleString('pl-PL') + ' kg'}</p>
						</div>
					)}
					{colorWeights[4] > 0 && (
						<div className='flex flex-row justify-between items-center py-[px] border-b border-solid border-gray-400'>
							<div className='flex flex-row items-center'>
								<img src={blond.src} alt='ikona blond papryki' className='w-6 mr-3' />
								<p>Papryka blondyna</p>
							</div>
							<p className='justify-self-end'>{colorWeights[4]?.toLocaleString('pl-PL') + ' kg'}</p>
						</div>
					)}
					<div className='flex flex-row justify-between items-center py-[px] border-b border-solid border-gray-400'>
						<div className='flex flex-row items-center'>
							<FontAwesomeIcon icon={fa1} className='mr-[15px] w-6 pl-1 font-bold text-2xl' />
							<p>Klasa</p>
						</div>
						<p className='justify-self-end'>{classWeights[0]?.toLocaleString('pl-PL') + ' kg'}</p>
					</div>
					<div className='flex flex-row justify-between items-center py-[px] border-b border-solid border-gray-400'>
						<div className='flex flex-row items-center'>
							<FontAwesomeIcon icon={fa2} className='mr-[15px] w-6 pl-1 font-bold text-2xl' />
							<p>Klasa</p>
						</div>
						<p className='justify-self-end'>{classWeights[1]?.toLocaleString('pl-PL') + ' kg'}</p>
					</div>
					<div className='flex flex-row justify-between items-center py-[px] border-b border-solid border-gray-400'>
						<div className='flex flex-row items-center'>
							<FontAwesomeIcon icon={fa3} className='mr-[15px] w-6 pl-1 font-bold text-2xl' />
							<p>Klasa (krojona)</p>
						</div>
						<p className='justify-self-end'>{classWeights[2]?.toLocaleString('pl-PL') + ' kg'}</p>
					</div>

					<div className='flex flex-row justify-between items-center py-[px] border-b border-solid border-gray-400'>
						<div className='flex flex-row items-center'>
							<FontAwesomeIcon icon={faWeightHanging} className='mr-[15px] w-6 pl-1 font-bold text-2xl' />
							<p className='font-semibold'>Suma:</p>
						</div>
						<p className='justify-self-end'>
							{formattedAnnualHarvest.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' kg'}
						</p>
					</div>
				</div>
			</ChartArea>
			<ChartArea className='w-full md:w-[340px] h-[420px]'>
				<div id='chart' className='h-full flex flex-col justify-start items-center'>
					<p className='font-semibold text-center'>
						Zbiory papryki w bieżącym sezonie w zależności od jej koloru na wykresie
					</p>
					<div className='mt-5'>
						<ReactApexChart
							options={colorChartData.options}
							series={colorChartData.series}
							type='donut'
							width={380}
							height={350}
						/>
					</div>
				</div>
			</ChartArea>
			<ChartArea className='w-full md:w-[340px] h-[420px]'>
				<div id='chart' className='h-full flex flex-col justify-start items-center'>
					<p className='font-semibold text-center'>Rozkład klas papryki w bieżącym sezonie na wykresie</p>
					<div className='mt-5'>
						<ReactApexChart
							options={classChartData.options}
							series={classChartData.series}
							type='donut'
							width={380}
							height={350}
						/>
					</div>
				</div>
			</ChartArea>
		</>
	)
}

export default ClassesOfPepper
