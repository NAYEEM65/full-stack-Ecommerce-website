import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="bg-slate-700 text-white h-[4rem] flex justify-center items-center">
            &copy; {year} All Rights Reserved by Nayeem
        </div>
    );
};

export default Footer;
