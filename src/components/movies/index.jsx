import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../reducers/moviesSlice';
import { openModal } from '../../reducers/modalSlice';
import { loadPlaceholderImage } from '../../utils';
import HeaderTitle from '../headerTitle';
import Pagination from '../pagination';


const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies)
  const error= useSelector(state => state.movies.error)
  const [year, setYear] = useState('')

  //HandlePagination
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = movies.slice(indexOfFirstResult, indexOfLastResult)

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  
  useEffect( () => {
    if(movies.length === 0) {
      dispatch(fetchMovies())
    }
  },[])

  const handleOpenModal = (data) => {
    dispatch(openModal(data))
  }

  //Filter by year
  const handleChangeYear = (e) => {
    const selectedYear = e.target.value
    setYear(selectedYear)
    dispatch(fetchMovies({year:selectedYear}))
  }

  useEffect(() => {
    dispatch(fetchMovies({
      year
    }))
  },[year])

  useEffect(() => {
    changePage(1)
  },[resultsPerPage])
  

  return (
    <>
    <HeaderTitle title='Popular Movies'/>
    <div className='container mx-auto px-5 flex items-center my-4'>
      <p>Filtrar películas por año: </p>
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
    {error && <p>Error al consultar películas</p>}
    {currentResults.length === 0 && <p className='mt-4'>No hay resultados para esta búsqueda.</p>}
    <div className='container mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4'>
    {currentResults.map(movie => (
      <div key={movie.id} className='mb-14 p-2 h-80 hover:opacity-75 rounded-lg hover:border-2 hover:border-gray flex justify-between items-center flex-col'>
        <div className='flex justify-center items-center h-full'>
        <img 
          className='w-auto max-h-[250px]'
          onError={loadPlaceholderImage}
          src={movie.images['Poster Art'].url} 
          />
        </div>
        <p data-testid={`fireEvent-${movie.id}`} className='cursor-pointer' onClick={() => handleOpenModal(movie)}>{movie.title}</p>
      </div>
    ))
    }
    </div>
    <Pagination
      resultsPerPage={resultsPerPage}
      totalResults={movies.length}
      currentPage={currentPage}
      handlePage={changePage}
      setResults={setResultsPerPage}
    />
    </>
  )
}

export default Movies;