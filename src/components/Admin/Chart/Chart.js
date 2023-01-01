import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import Card from '../../Card/Card';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
};

const Chart = () => {
    const { orderHistory: orders } = useSelector((state) => state.orders);

    // Create a new array of order status
    const array = [];
    orders.map((item) => {
        const { orderStatus } = item;
        return array.push(orderStatus);
    });

    const getOrderCount = (arr, value) => {
        return arr.filter((n) => n === value).length;
    };

    const [q1, q2, q3, q4] = ['Order Placed...', 'Processing...', 'Shipped...', 'Delivered'];

    const placed = getOrderCount(array, q1);
    const processing = getOrderCount(array, q2);
    const shipped = getOrderCount(array, q3);
    const delivered = getOrderCount(array, q4);

    const data = {
        labels: ['Placed Orders', 'Processing', 'Shipped', 'Delivered'],
        datasets: [
            {
                label: 'Order count',
                data: [placed, processing, shipped, delivered],
                backgroundColor: 'rgba(16, 107, 255, 0.5)',
            },
        ],
    };

    return (
        <div className="w-full max-w-[500px]">
            <Card cardClass="p-4 border border-b-4 border-b-orange-500">
                <h3>Order Status Chart</h3>
                <Bar options={options} data={data} />
            </Card>
        </div>
    );
};

export default Chart;
