import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../reducers/modalSlice';
import { loadPlaceholderImage } from '../../utils';

export const Modal = () => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.modal.showModal);
    const modalData = useSelector(state => state.modal.modalData);
    const handleCloseModal = () => {
      dispatch(closeModal())
    }

  return (
    <>
    {showModal && 
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div className='bg-white p-8 rounded-lg w-3/4 md:w-2/5 relative'>
          <button className="absolute top-0 right-0 m-4 text-gray-600" onClick={handleCloseModal}>
            X
          </button>
            <img src={modalData?.images['Poster Art'].url} alt={modalData?.title} className="mt-4 mx-auto w-1/3" onError={loadPlaceholderImage}/>
            <div className='p-4'>
              <h2 data-testid={`title-${modalData.id}`} className="text-2xl font-bold">{modalData?.title}</h2>
              <p>Release Year: {modalData?.releaseYear}</p>
              <p className='text-left mt-4'>{modalData?.description}</p>
            </div>
      </div>
    </div>
    }
    </>
  )
}

export default Modal;
