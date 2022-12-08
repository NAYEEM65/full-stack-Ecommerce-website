import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetchCollection from '../../../hooks/useFetchCollection';
import { storeOrders } from '../../../redux/orderSlice/OrderSlice';

const Orders = () => {
    const { data, isLoading } = useFetchCollection('orders');
    const { orderHistory, totalOrderAmount } = useSelector((state) => state.orders);
    console.log(orderHistory);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(storeOrders(data));
    }, [data, dispatch]);
    const handleClick = (id) => {
        navigate(`/admin/order-details/${id}`);
    };
    return (
        <div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                s/n
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Order ID
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Order Amount
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Order Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((order, index) => (
                            <tr
                                onClick={() => handleClick(order.id)}
                                className="bg-white border-b cursor-pointer dark:bg-gray-900 dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {index + 1}
                                </th>
                                <td className="py-4 px-6">
                                    {order.orderDate} at {order.orderTime}
                                </td>
                                <td className="py-4 px-6">{order.id}</td>
                                <td className="py-4 px-6">
                                    {'$'}
                                    {order.orderAmount}
                                </td>
                                <td
                                    className={`py-4 px-6 font-semibold ${
                                        order.orderStatus !== 'Delivered'
                                            ? 'text-orange-600'
                                            : 'text-green-600'
                                    }`}
                                >
                                    {' '}
                                    {order.orderStatus}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
