import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSeries } from '../../reducers/seriesSlice';
import { openModal } from '../../reducers/modalSlice';
import { loadPlaceholderImage } from '../../utils';
import HeaderTitle from '../headerTitle';
import Pagination from '../pagination';
import Loader from '../loader';


const Series = () => {
  const dispatch = useDispatch();
  const {series, error, loading} = useSelector(state => state.series)
  const [year, setYear] = useState('')

  //HandlePagination
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = series && series.slice(indexOfFirstResult, indexOfLastResult)

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  const handleOpenModal = (data) => {
    dispatch(openModal(data))
  }
  
  //Filter by year
  const handleChangeYear = (e) => {
    const selectedYear = e.target.value
    setYear(selectedYear)
    dispatch(fetchSeries({year:selectedYear}))
  }

  useEffect(() => {
    changePage(1)
  },[resultsPerPage])

  useEffect(() => {
    dispatch(fetchSeries({
      year
    }))
  },[year])
  
  useEffect( () => {
    if(series.length === 0) {
        dispatch(fetchSeries({
          year
        }))
      }
  },[])

  return (
    <div>
    <HeaderTitle title="Popular Series"/>
    <div className='container mx-auto px-5 flex items-center my-4'>
      <p>Filtrar series por año: </p>
        <select onChange={(e) => handleChangeYear(e)} className='bg-gray-200 rounded-lg w-[7em] ml-2 px-1'>
          <option value="">Todos</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
        </select>
    </div>
    {loading && <Loader/>}
    {!loading && error && <p>Error al consultar series</p>}
    {!error && currentResults.length === 0 && <p className='mt-4'>No hay resultados para esta búsqueda.</p>}
    <div className='container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8'>
    {currentResults && currentResults.map(serie => (
      <div key={serie.id} className='p-2 h-80 hover:opacity-75 rounded-lg hover:border-2 hover:border-gray flex justify-between items-center flex-col'>
        <div className='flex justify-center items-center flex-col h-full'>
          <img src={serie.images['Poster Art'].url} onError={loadPlaceholderImage} className='w-auto max-h-[250px]'/>
        </div>
        <p data-testid={`fireEvent-${serie.id}`} className='cursor-pointer' onClick={() => handleOpenModal(serie)}>{serie.title}</p>
      </div>
    ))
    }
    </div>
    <Pagination
      resultsPerPage={resultsPerPage}
      totalResults={series.length}
      currentPage={currentPage}
      handlePage={changePage}
      setResults={setResultsPerPage}
    />
    </div>
  )
}

export default Series;