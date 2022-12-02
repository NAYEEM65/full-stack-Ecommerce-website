import React, { useEffect } from 'react';
import PageHeading from '../../common/PageHeading';
import InfoBox from '../../InfoBox/InfoBox';
import { FaDollarSign, FaShoppingCart, FaCartArrowDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import useFetchCollection from '../../../hooks/useFetchCollection';
import { calcTotalOrderAmount, storeOrders } from '../../../redux/orderSlice/OrderSlice';
import { storeProduct } from '../../../redux/productSlice/productSlice';

const earningIcon = <FaDollarSign size={30} className="text-white" />;
const productIcon = <FaShoppingCart size={30} className="text-blue-500" />;
const orderIcon = <FaCartArrowDown size={30} className="text-orange-500" />;

const Home = () => {
    const dispatch = useDispatch();
    const { orderHistory, totalOrderAmount } = useSelector((state) => state.orders);
    const { products } = useSelector((state) => state.product);
    const fbProduct = useFetchCollection('products');
    const { data } = useFetchCollection('orders');
    useEffect(() => {
        dispatch(
            storeProduct({
                products: fbProduct.data,
            }),
        );
        dispatch(storeOrders(data));
        dispatch(
            calcTotalOrderAmount({
                amount: data,
            }),
        );
    }, [data, dispatch, fbProduct]);

    return (
        <div className="max-w-4xl">
            <PageHeading>Admin Home</PageHeading>
            <div className="grid grid-cols-2 col-auto gap-2">
                <InfoBox
                    title="Earnings"
                    count={`$ ${totalOrderAmount}`}
                    icon={earningIcon}
                    classList="border-b-indigo-500"
                    bg="bg-indigo-500 "
                />
                <InfoBox
                    title="Products"
                    count={products?.length}
                    icon={productIcon}
                    classList="border-b-blue-500"
                />
                <InfoBox
                    title="Orders"
                    count={`${orderHistory.length}`}
                    icon={orderIcon}
                    classList="border-b-orange-500"
                />
            </div>
        </div>
    );
};

export default Home;
