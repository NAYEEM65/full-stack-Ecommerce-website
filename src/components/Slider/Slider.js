import { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import './slider.css';
import { sliderData } from './sliderData';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    //   console.log(slideLength);

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            const auto = () => {
                slideInterval = setInterval(nextSlide, intervalTime);
            };
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide, slideInterval, autoScroll]);

    return (
        <div className="slider">
            <AiOutlineLeft
                className="bg-transparent text-white w-10 h-10 cursor-pointer absolute top-[50%] left-2 rounded -translate-y-[50%] z-[2] hover:text-orange-600 hover:bg-white"
                onClick={prevSlide}
            />
            <AiOutlineRight
                className="bg-transparent text-orange-600  w-10 h-10 cursor-pointer absolute top-[50%] -translate-y-[50%] right-2 rounded z-[2] hover:text-orange-600 hover:bg-white"
                onClick={nextSlide}
            />

            {sliderData.map((slide, index) => {
                const { image, heading, desc } = slide;
                return (
                    <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
                        {index === currentSlide && (
                            <>
                                <img src={image} alt="slide" />
                                <div className="content rounded bg-black/30">
                                    <h2>{heading}</h2>
                                    <p>{desc}</p>
                                    <hr className="h-[2px] bg-white w-1/3" />
                                    <a
                                        href="#product"
                                        className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;
