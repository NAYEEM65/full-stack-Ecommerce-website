import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Slider = () => {
    return (
        <div className="w-full h-[90vh] relative overflow-hidden bg-black">
            <AiOutlineLeft className="bg-transparent text-white w-10 h-10 cursor-pointer absolute top-[50%] left-2 -translate-y-[50%] z-10 hover:bg-white rounded hover:text-orange-600 transition duration-150 ease-in" />
            <AiOutlineRight className="bg-transparent text-white w-10 h-10 cursor-pointer absolute top-[50%] right-2 -translate-y-[50%] z-10 hover:bg-white rounded hover:text-orange-600 transition duration-150 ease-in" />
        </div>
    );
};

export default Slider;
