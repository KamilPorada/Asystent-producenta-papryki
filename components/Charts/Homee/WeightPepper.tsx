import React, { useMemo, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

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

const WeightPepper: React.FC<Props> = ({ allTrades }) => {
  const currentYear = new Date().getFullYear();
  const intervalDays = 5;

  // Calculate intervals for a given year
  const calculateIntervals = (year: number): { start: Date; end: Date }[] => {
    const startDate = new Date(year, 6, 10); // July 10th
    const endDate = new Date(year, 10, 7); // November 7th

    const intervals: { start: Date; end: Date }[] = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + intervalDays)) {
      const intervalEnd = new Date(d);
      intervalEnd.setDate(intervalEnd.getDate() + intervalDays);
      intervals.push({ start: new Date(d), end: intervalEnd });
    }
    return intervals;
  };

  // Calculate total weight excluding current year
  const totalWeight = useMemo(() => {
    return allTrades
      .filter(trade => new Date(trade.date).getFullYear() !== currentYear)
      .reduce((sum, trade) => sum + trade.weight, 0);
  }, [allTrades, currentYear]);

  // Prepare intervals and calculate the total weight for each interval across all years
  const totalWeightsByInterval = useMemo(() => {
    const tradesByYear: { [key: number]: TradeOfPepper[] } = {};

    // Filter out the current year's trades and group by year
    allTrades.forEach(trade => {
      const tradeYear = new Date(trade.date).getFullYear();
      if (tradeYear !== currentYear) {
        if (!tradesByYear[tradeYear]) {
          tradesByYear[tradeYear] = [];
        }
        tradesByYear[tradeYear].push(trade);
      }
    });

    const totalIntervals = 25;

    // Initialize an array to store total weights for each interval
    const allYearsTotalWeights = new Array(totalIntervals).fill(0);

    // Iterate through each year and its trades
    Object.keys(tradesByYear).forEach(year => {
      const trades = tradesByYear[parseInt(year)];
      const intervals = calculateIntervals(parseInt(year));

      intervals.forEach(({ start, end }, index) => {
        const intervalTrades = trades.filter(trade => {
          const tradeDate = new Date(trade.date).getTime();
          return tradeDate >= start.getTime() && tradeDate < end.getTime();
        });

        const totalWeight = intervalTrades.reduce((sum, trade) => sum + trade.weight, 0);
        allYearsTotalWeights[index] += totalWeight;
      });
    });

    return allYearsTotalWeights;
  }, [allTrades, currentYear]);

  // Calculate normalized weights by dividing each interval weight by the total weight
  const normalizedWeightsByInterval = useMemo(() => {
    if (totalWeight === 0) return totalWeightsByInterval; // Avoid division by zero
    return totalWeightsByInterval.map(weight => {
      const normalized = (weight / totalWeight) * 100;
      return Math.round(normalized * 100) / 100; // Multiply by 100 and round to 2 decimal places
    });
  }, [totalWeightsByInterval, totalWeight]);

  useEffect(() => {
    // Log the normalized weights for each 5-day interval across all years
    console.log('Normalized weights for each 5-day interval across all years (as percentages):');
    console.log(normalizedWeightsByInterval);
  }, [normalizedWeightsByInterval]);

  // Generate categories for the x-axis
  const categories = useMemo(() => {
    return Array.from({ length: normalizedWeightsByInterval.length }, (_, i) => `Interval ${i + 1}`);
  }, [normalizedWeightsByInterval]);

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'area' as const,
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight' as const
    },
    title: {
      text: 'Normalized Weights by Interval',
      align: 'left' as const
    },
    xaxis: {
      categories: categories,
      title: {
        text: 'Interval'
      }
    },
    yaxis: {
      title: {
        text: 'Normalized Weight (%)'
      }
    },
    legend: {
      horizontalAlign: 'left' as const
    }
  });

  const [chartSeries, setChartSeries] = useState([{
    name: 'Normalized Weights',
    data: normalizedWeightsByInterval
  }]);

  return (
    <div className='w-full'>
      <div id="chart">
        <ReactApexChart options={chartOptions} series={chartSeries} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default WeightPepper;
