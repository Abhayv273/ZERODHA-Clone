import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Orders ' ,
    },
  },
  scales: {
    y: {
      position: 'left',
      //  ticks: {
      // stepSize: 20,
      //   },
      type: 'linear',
      title:{
      text:"Quantity",
      display: true,

      }
      
    },
    y1: {
      type: 'linear' ,
      position: 'right',
      ticks: {
      stepSize: 500,
        },
       title:{
      text:"Price(₹)",
      display: true,
       },
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       yAxisID: 'y',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       yAxisID: 'y1',
//     },
//   ],
// };

export function MultiAxisChart({data}) {
  return <Line options={options} data={data} />;
}
