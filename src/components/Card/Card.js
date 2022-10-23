import React from 'react';

const Card = ({ children, cardClass }) => {
    return (
        <div
            className={`${cardClass} border-[1px] border-transparent rounded shadow-md overflow-hidden`}
        >
            {children}
        </div>
    );
};

export default Card;
