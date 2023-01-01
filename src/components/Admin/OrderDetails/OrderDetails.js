import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchDocument from '../../../hooks/useFetchDocument';
import PageHeading from '../../common/PageHeading';
import Loader from '../../Loader/Loader';
import ChangeOrderStatus from '../ChangeOrderStatus/ChangeOrderStatus';

const OrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const { document } = useFetchDocument('orders', id);
    useEffect(() => {
        setOrder(document);
    }, [document]);

    return (
        <>
            <div className="px-10 my-10 min-h-[70vh]">
                <PageHeading>Order Details</PageHeading>
                {order === null ? (
                    <Loader />
                ) : (
                    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                        <div>
                            <p>
                                <b>Order ID: </b> {order.id}
                            </p>
                            <p>
                                <b>Order Amount: </b> ${order.orderAmount}
                            </p>
                            <p>
                                <b>Order Status: </b> {order.orderStatus}
                            </p>
                            <p>
                                <b>User Email: </b> {order.userEmail}
                            </p>
                            <p>
                                <b>Shipping Address: </b>
                                <br />
                                Address: {order.shippingAddress.line1},{order.shippingAddress.line2}
                                ,{order.shippingAddress.city} <br />
                                State: {order.shippingAddress.state} <br />
                                Country: {order.shippingAddress.country}
                            </p>
                        </div>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs border-b border-t  border-gray-400 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Serial
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Product
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Price
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Quantity
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Total
                                    </th>
                                    {/* <th scope="col" className="py-3 px-6">
                                        Action
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {order.cartItems.map((ord, index) => (
                                    <tr
                                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 rounded even:bg-slate-200 transition duration-100 ease-in-out hover:bg-slate-300 "
                                        key={ord.id}
                                    >
                                        <td className="py-4 px-6">{index + 1}</td>
                                        <td className="py-4 px-6">
                                            {ord.name.slice(0, 30)}...
                                            <img
                                                src={ord.imageUrl}
                                                alt={ord.id}
                                                className="h-[60px]"
                                            />
                                        </td>

                                        <td className="py-4 px-6">${ord.price}</td>
                                        <td className="py-4 px-6">{ord.cartQuantity}</td>
                                        <td className="py-4 px-6">
                                            ${ord.price * ord.cartQuantity}
                                        </td>

                                        {/* <td className="py-4 px-6">
                                            <NavLink
                                                to={`/review-product/${ord.id}`}
                                                className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-2"
                                            >
                                                Review Product
                                            </NavLink>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <ChangeOrderStatus order={order} id={id} />
            </div>
        </>
    );
};

export default OrderDetails;
