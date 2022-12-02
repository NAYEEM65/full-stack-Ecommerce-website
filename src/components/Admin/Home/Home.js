import React from 'react';
import PageHeading from '../../common/PageHeading';
import InfoBox from '../../InfoBox/InfoBox';
import { FaDollarSign, FaShoppingCart, FaCartArrowDown } from 'react-icons/fa';

const earningIcon = <FaDollarSign size={30} className="text-white" />;
const productIcon = <FaShoppingCart size={30} className="text-blue-500" />;
const orderIcon = <FaCartArrowDown size={30} className="text-orange-500" />;

const Home = () => {
    return (
        <div className="max-w-4xl">
            <PageHeading>Admin Home</PageHeading>
            <div className="grid grid-cols-2 col-auto gap-2">
                <InfoBox
                    title="Earnings"
                    count={'$ 188'}
                    icon={earningIcon}
                    classList="border-b-indigo-500"
                    bg="bg-indigo-500 "
                />
                <InfoBox
                    title="Products"
                    count={188}
                    icon={productIcon}
                    classList="border-b-blue-500"
                />
                <InfoBox
                    title="Orders"
                    count={'$ 188'}
                    icon={orderIcon}
                    classList="border-b-orange-500"
                />
            </div>
        </div>
    );
};

export default Home;
