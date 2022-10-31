import React, { useState } from 'react';

const Pagination = ({ currentPage, setCurrentPage, proudctPerPage, totalProductCount }) => {
    const pageNumbers = [];
    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const totalPages = Math.ceil(totalProductCount / proudctPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const naxtPage = () => {
        setCurrentPage(currentPage + 1);
        // Show next set of pageNumbers
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        setCurrentPage(currentPage - 1);
        // Show prev set of pageNumbers
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    for (let i = 1; i <= Math.ceil(totalProductCount / proudctPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="btn-group flex justify-start items-center gap-2">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === pageNumbers[0] ? true : false}
                        className={`${
                            currentPage === pageNumbers[0] ? 'cursor-not-allowed' : ''
                        } py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    {pageNumbers.map((value, index) => (
                        <li
                            key={index}
                            onClick={() => paginate(value)}
                            className={`${
                                currentPage === value
                                    ? 'text-orange-600 hover:bg-orange-100 bg-orange-200 hover:text-orange-700'
                                    : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                            } py-2 px-3 leading-tight   border border-gray-300   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}
                        >
                            {value}
                        </li>
                    ))}
                    <button
                        disabled={
                            currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
                        }
                        onClick={naxtPage}
                        className={`${
                            currentPage === pageNumbers[pageNumbers.length - 1]
                                ? 'cursor-not-allowed'
                                : false
                        } py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </ul>
            </nav>

            <p>
                <b className="text-orange-500">{`page ${currentPage}`}</b>
                <span>{` Of `}</span>
                {totalPages}
            </p>
        </div>
    );
};

export default Pagination;
