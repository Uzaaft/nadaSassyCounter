import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Click } from '../../types/dataTypes';
import dayjs from 'dayjs';

interface PlotProps {
  data: Click[];
}

const dateFormatter = (date: number) => {
  // return moment(date).unix();
  return dayjs(date).format('DD/MM/YY HH:mm:ss');
};
// create a plot which shows the time of the clicks, and the sum of the clicks in that time
export default function Plot({ data }: PlotProps) {
  const plotData = data.reduce((acc, curr) => {
    const time = dayjs(curr.time).format('DD/MM/YY HH:mm:ss');
    const index = acc.findIndex((item) => item.time === time);
    console.log(index);
    if (index === -1) {
      acc.push({ time, clicks: 1 });
    } else {
      acc[index].clicks += 1;
    }
    return acc;
  }, [] as { time: string; clicks: number }[]);
  console.log(plotData);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={plotData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="time" scale="time" type="number" tickFormatter={dateFormatter} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="clicks" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

//
// export default function Plot({ data }: PlotProps) {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <LineChart
//         data={data}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />

//   );
// }
