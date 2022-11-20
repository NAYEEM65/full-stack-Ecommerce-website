import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useFetchCollection from '../../hooks/useFetchCollection';
import { storeOrders } from '../../redux/orderSlice/OrderSlice';
import PageHeading from '../common/PageHeading';
import Loader from '../Loader/Loader';

const OrderHistory = () => {
    const { data, isLoading } = useFetchCollection('orders');
    const { orderHistory } = useSelector((state) => state.orders);
    const { userId } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(storeOrders(data));
    }, [dispatch, data]);

    const handleClick = (id) => {
        navigate(`/order-details/${id}`);
    };

    const filteredOrders = orderHistory.filter((order) => order.userId === userId);

    return (
        <section className="py-10 px-10 min-h-[70vh]">
            <div>
                <PageHeading>Your Order History</PageHeading>
                <p>
                    Open an order to leave a <b>Product Review</b>
                </p>
                <br />
                <>
                    {isLoading && <Loader />}
                    <div>
                        {filteredOrders.length === 0 ? (
                            <p>No order found</p>
                        ) : (
                            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs border-b border-t  border-gray-400 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">
                                                Serial
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
                                        {filteredOrders.map((order, index) => {
                                            const {
                                                id,
                                                orderDate,
                                                orderTime,
                                                orderAmount,
                                                orderStatus,
                                            } = order;
                                            return (
                                                <tr
                                                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 rounded even:bg-slate-200 transition duration-100 ease-in-out hover:bg-slate-300 "
                                                    key={id}
                                                    onClick={() => handleClick(id)}
                                                >
                                                    <td className="py-4 px-6">{index + 1}</td>
                                                    <td className="py-4 px-6">
                                                        {orderDate} at {orderTime}
                                                    </td>
                                                    <td className="py-4 px-6">{id}</td>
                                                    <td className="py-4 px-6">
                                                        {'$'}
                                                        {orderAmount}
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        <p>{orderStatus}</p>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </>
            </div>
        </section>
    );
};

export default OrderHistory;
