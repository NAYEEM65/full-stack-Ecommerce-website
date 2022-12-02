import React from 'react';

const InfoBox = ({ title, count, icon, classList, bg }) => {
    return (
        <div className={`border shadow-lg max-w-sm mt-2 border-b-4 ${classList}`}>
            <div className=" p-5">
                <h4 className="text-2xl pb-3">{title}</h4>
                <div className="flex justify-between items-center">
                    <h3 className="text-3xl">{count}</h3>
                    <span
                        className={`${bg} h-12 w-12 rounded-full object-cover flex justify-center items-center`}
                    >
                        {icon}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default InfoBox;
