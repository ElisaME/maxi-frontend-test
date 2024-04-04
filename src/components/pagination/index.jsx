import React from 'react'

const Pagination = (props) => {
    const { resultsPerPage, totalResults, currentPage, handlePage, setResults } = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalResults/resultsPerPage); i++) {
        pageNumbers.push(i)
    }

  return (
    <div className='flex justify-center'>
        {pageNumbers.map(pageNumber => (
            <button
                key={pageNumber}
                className={`rounded-full w-8 h-8 mx-2 ${pageNumber === currentPage ?'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handlePage(pageNumber)}
            >
                {pageNumber}
            </button>
        ))}
        <select className='bg-gray-200 rounded-lg ml-2 px-1'
        value={resultsPerPage} onChange={(e) => setResults(e.target.value)}>
            <option value={5}>5 resultados por página</option>
            <option value={10}>10 resultados por página</option>
            <option value={20}>20 resultados por página</option>
        </select>
    </div>
  )
}

export default Pagination;