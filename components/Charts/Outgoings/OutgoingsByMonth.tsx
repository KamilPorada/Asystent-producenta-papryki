import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import ChartArea from '@components/UI/ChartArea';

type ChartData = {
    name: string;
    type: string;
    data: number[];
};

interface Outgoing {
    _id: string;
    creator: {
        _id: string;
        email: string;
        username: string;
        image: string;
    };
    name: string;
    category: number;
    date: string;
    price: number;
    amount: number;
    totalSum: number;
    describe: string;
}

interface Props {
    allOutgoings: Outgoing[];
}

function OutgoingsByMonth({ allOutgoings }: Props) {
    const [monthlyOutgoings, setMonthlyOutgoings] = useState<number[]>([]);
    const [formattedSeasonOutgoingSum, setFormattedSeasonOutgoingSum] = useState<string>('');

    useEffect(() => {
        const calculateMonthlyOutgoings = (outgoings: Outgoing[]): number[] => {
            const monthlyOutgoings: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            outgoings.forEach(outgoing => {
                const month = new Date(outgoing.date).getMonth();
                monthlyOutgoings[month] += outgoing.totalSum || 0;
            });

            return monthlyOutgoings;
        };

        const monthlyOutgoings = calculateMonthlyOutgoings(allOutgoings);
        setMonthlyOutgoings(monthlyOutgoings);

        const seasonOutgoingSum = monthlyOutgoings.reduce((total, outgoing) => total + outgoing, 0);
        const formattedSeasonOutgoingSum = seasonOutgoingSum.toLocaleString('pl-PL');
        setFormattedSeasonOutgoingSum(formattedSeasonOutgoingSum);

        // Dynamiczne ustawienie danych dla wykresu w ReactApexChart
        const seriesData: ChartData[] = [{
            name: 'Wydatki (zł)',
            type: 'bar',
            data: monthlyOutgoings,
        }];

        setSeries(seriesData);
    }, [allOutgoings]);

    const [series, setSeries] = useState<ChartData[]>([]);

    const [options] = useState<any>({
        chart: {
            type: 'line',
            stacked: false,
        },
        stroke: {
            width: [0, 1],
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },
        xaxis: {
            categories: [
                'Styczeń',
                'Luty',
                'Marzec',
                'Kwiecień',
                'Maj',
                'Czerwiec',
                'Lipiec',
                'Sierpień',
                'Wrzesień',
                'Październik',
                'Listopad',
                'Grudzień',
            ],
        },
        yaxis: [
            {
                seriesName: 'Wydatki (zł)',
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#262626',
                },
                labels: {
                    style: {
                        colors: '#262626',
                    },
                },
                title: {
                    text: 'Wydatki (zł)',
                    style: {
                        color: '#262626',
                    },
                },
            },
        ],
        tooltip: {
            shared: false,
            intersect: true,
            y: {
                formatter: function (val: number) {
                    return val.toLocaleString('pl-PL') + ' zł';
                },
            },
        },
        colors: ['#00b000'],
    });

    return (
        <ChartArea className='w-full md:w-[950px] h-[420px]'>
            <div className='flex justify-start mx-10'>
                <div>
                    <p className='font-semibold'>Suma wydatków w sezonie:</p>
                    <p className='text-lg font-semibold text-mainColor'>{formattedSeasonOutgoingSum} zł</p>
                </div>
            </div>
            <div id='chart' className='flex md:justify-center md:items-center overflow-x-auto'>
                <ReactApexChart options={options} series={series} type='line' height={320} width={900} />
            </div>
        </ChartArea>
    );
}

export default OutgoingsByMonth;
