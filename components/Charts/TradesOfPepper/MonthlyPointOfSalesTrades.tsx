import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import ChartArea from '@components/UI/ChartArea';

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

const PepperWeightsBySeller: React.FC<Props> = ({ allTrades }) => {
  const calculateWeightsBySellerAndMonth = (trades: TradeOfPepper[]) => {
    const weightsBySellerAndMonth: { [sellerId: string]: number[] } = {};

    trades.forEach((trade) => {
      const month = new Date(trade.date).getMonth();
      const sellerId = trade.pointOfSaleId;

      if (month >= 6 && month <= 10) {
        if (weightsBySellerAndMonth[sellerId]) {
          weightsBySellerAndMonth[sellerId][month - 6] += trade.weight;
        } else {
          weightsBySellerAndMonth[sellerId] = [0, 0, 0, 0, 0];
          weightsBySellerAndMonth[sellerId][month - 6] = trade.weight;
        }
      }
    });

    return weightsBySellerAndMonth;
  };
  const calculateTotalSumsBySellerAndMonth = (trades: TradeOfPepper[]) => {
    const totalSumBySellerAndMonth: { [sellerId: string]: number[] } = {};

    trades.forEach((trade) => {
      const month = new Date(trade.date).getMonth();
      const sellerId = trade.pointOfSaleId;

      if (month >= 6 && month <= 10) {
        if (totalSumBySellerAndMonth[sellerId]) {
          totalSumBySellerAndMonth[sellerId][month - 6] += trade.totalSum;
        } else {
          totalSumBySellerAndMonth[sellerId] = [0, 0, 0, 0, 0];
          totalSumBySellerAndMonth[sellerId][month - 6] = trade.totalSum;
        }
      }
    });

    return totalSumBySellerAndMonth;
  };

  const weightsBySellerAndMonth = calculateWeightsBySellerAndMonth(allTrades);
  const totalSumBySellerAndMonth = calculateTotalSumsBySellerAndMonth(allTrades);

  const sellers = Object.keys(weightsBySellerAndMonth);
  const seriesData = sellers.map((sellerId) => {
    const sellerWeights = weightsBySellerAndMonth[sellerId];
    return {
      name: sellerId,
      data: sellerWeights,
    };
  });

  const [chartData] = useState<{
    series: { data: number[]; name: string }[];
    options: ApexCharts.ApexOptions;
  }>(() => {
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: '13px',
                fontWeight: 900,
              },
            },
          },
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {
        text: 'Punkty sprzedaży',
      },
      xaxis: {
        categories: ['Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad'],
        labels: {
          formatter: (value: string) => parseInt(value).toString() + ' kg',
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: (val: number) => val.toFixed(0) + 'kg',
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };

    return {
      series: seriesData,
      options: options,
    };
  });

  return (
    <ChartArea className='w-full h-[420px]'>
      <div id='chart' className='h-full flex flex-col justify-start items-center overflow-x-auto'>
        <p className='font-semibold text-center'>Miesięczny rozkład sprzedaży papryki w odniesieniu do punktów sprzedaży</p>
        <div className='mt-5'>
          <ReactApexChart options={chartData.options} series={chartData.series} type='bar' height={350} width={1100} />
        </div>
      </div>
    </ChartArea>
  );
};

export default PepperWeightsBySeller;
