import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = ({ value, onChange }) => {
    return (
        <div className="my-1 relative mx-0 flex items-center justify-between">
            <BiSearch size={18} className="absolute top-[50%] left-4 -translate-y-[50%]" />

            <input
                type="text"
                placeholder="Search by name"
                className="focus:outline-none block pl-12 focus:ring-transparent focus:appearance-none border-none bg-gray-300 rounded"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Search;
