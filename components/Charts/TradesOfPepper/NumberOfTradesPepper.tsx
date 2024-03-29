import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import ChartArea from '@components/UI/ChartArea';

type ChartData = {
  name: string;
  data: number[];
};

interface TradeOfPepper {
  _id: string;
  creator: {
    _id: string;
    email: string;
    username: string;
    image: string;
  };
  pointOfSaleId: string;
  date: string;
  clas: number;
  color: number;
  price: number;
  weight: number;
  vatRate: number;
  totalSum: number;
}

interface Props {
  allTrades: TradeOfPepper[];
}

function NumberOfTradesPepper({ allTrades }: Props) {
  const [series, setSeries] = useState<ChartData[]>([]);
  const [options] = useState<any>({
    chart: {
      type: 'radar',
    },
    title: {
      text: '',
    },
    xaxis: {
      categories: ['Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad'],
    },
    colors: ['#00b000'],
  });

  useEffect(() => {
    const calculateMonthlyTransactionCount = (trades: TradeOfPepper[]): number[] => {
      const monthlyTransactionCounts: number[] = [0, 0, 0, 0, 0];

      trades.forEach((trade) => {
        const month = new Date(trade.date).getMonth();

        if (month >= 6 && month <= 10) {
          monthlyTransactionCounts[month - 6] += 1;
        }
      });

      return monthlyTransactionCounts;
    };

    const monthlyTransactionCounts = calculateMonthlyTransactionCount(allTrades);

    setSeries([
      {
        name: 'Liczba transakcji w poszczególnych miesiącach sezonu',
        data: monthlyTransactionCounts,
      },
    ]);
  }, [allTrades]);

  return (
    <ChartArea className='w-full md:w-[340px] h-[420px]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='mb-3 text-center font-semibold'>
          Liczba transakcji sprzedaży papryki na przestrzeni kolejnych miesięcy sezonu
        </p>
        <div id='chart'>
          <ReactApexChart options={options} series={series} type='radar' height={350} width={300} />
        </div>
      </div>
    </ChartArea>
  );
}

export default NumberOfTradesPepper;
