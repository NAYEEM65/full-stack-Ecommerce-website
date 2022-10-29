import React, { useEffect } from 'react';
import Products from '../../components/Products/Products';
import Slider from '../../components/Slider/Slider';

const Home = () => {
    const url = window.location.href;
    const scrollToProduct = () => {
        if (url.includes('#products')) {
            window.scrollTo({
                top: 700,
                behavior: 'smooth',
            });
            return;
        }
    };
    useEffect(() => {
        scrollToProduct();
    }, []);
    return (
        <div>
            {/* <Slider /> */}
            <Products />
        </div>
    );
};

export default Home;
