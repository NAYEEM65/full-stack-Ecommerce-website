import React from 'react';

const PageHeading = ({ children }) => {
    return (
        <>
            <h2 className="text-3xl mb-2 text-slate-700 font-bold border-b-2 border-gray-400 w-fit">
                {children}
            </h2>
        </>
    );
};

export default PageHeading;
