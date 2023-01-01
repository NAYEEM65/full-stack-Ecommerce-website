import { doc, setDoc, Timestamp } from 'firebase/firestore';
import Notiflix from 'notiflix';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../../../firebase/config';
import Card from '../../Card/Card';
import Loader from '../../Loader/Loader';

const ChangeOrderStatus = ({ order, id }) => {
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    console.log(order);
    const editOrder = (e, id) => {
        e.preventDefault();
        setIsLoading(true);

        const orderConfig = {
            userId: order.userId,
            userEmail: order.userEmail,
            orderDate: order.orderDate,
            orderTime: order.orderTime,
            orderAmount: order.orderAmount,
            orderStatus: status,
            cartItems: order.cartItems,
            shippingAddress: order.shippingAddress,
            createdAt: order.createdAt,
            editedAt: Timestamp.now().toDate(),
        };
        Notiflix.Confirm.show(
            'Change Order Status',
            ' Do You Want to Change Order Status?',
            `${status}`,
            'Cancel',
            function okCb() {
                try {
                    setDoc(doc(db, 'orders', id), orderConfig);
                    setIsLoading(false);
                    toast.success('Order status changes successfully');
                    navigate('/admin/orders');
                } catch (error) {
                    setIsLoading(false);
                    toast.error(error.message);
                }
            },
            function cancelCb() {
                setIsLoading(false);
                toast.warning('Change Order Status Canceled');
            },
            {
                width: '320px',
                borderRadius: '8px',
                titleColor: '#fb923c',
                okButtonBackground: '#fb923c',
                cssAnimationStyle: 'zoom',
            },
        );
    };

    return (
        <>
            {isLoading && <Loader />}

            <div className="w-full max-w-sm my-8 mx-0">
                <Card cardClass="p-4 border-2 border-blue-200">
                    <h4>Update Status</h4>
                    <form onSubmit={(e) => editOrder(e, id)}>
                        <div className="flex justify-start items-center gap-2">
                            <span>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="select select-success w-full max-w-xs"
                                >
                                    <option value="" disabled>
                                        -- Choose one --
                                    </option>
                                    <option value="Order Placed...">Order Placed...</option>
                                    <option value="Processing...">Processing...</option>
                                    <option value="Shipped...">Shipped...</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                            </span>
                            <span>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-2"
                                >
                                    Update Status
                                </button>
                            </span>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default ChangeOrderStatus;
