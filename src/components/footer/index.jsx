import React from 'react'

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 h-54 bg-[#2c2c2c] text-gray-300 text-xs w-full">
      <div className='container mx-auto text-left p-2 md:p-8'>
      <ol class="hidden md:flex py-2">
        <li>
          Home
        </li>
        <li>
          <span class="mx-2">|</span>
        </li>
        <li>Terms and Conditions</li>
        <li>
          <span class="mx-2">|</span>
        </li>
        <li>Privacy Policy</li>
        <li>
          <span class="mx-2">|</span>
        </li>
        <li>Collection Statement</li>
        <li>
          <span class="mx-2">|</span>
        </li>
        <li>Help</li>
        <li>
          <span class="mx-2">|</span>
        </li>
        <li>Manage Account</li>
      </ol>
      <ol class='md:hidden grid grid-cols-2 sm:grid-cols-3 py-2'>
        <li>Home</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Collection Statement</li>
        <li>Help</li>
        <li>Manage Account</li>
      </ol>
      <p className='py-2'>Copyright &#169; 2016 DEMO Streaming. All Rights Reserved</p>
      <div className='flex flex-col md:flex-row gap-2'>
        <div className='flex w-full md:w-1/6 md:justify-start justify-around'>
          <img src='/social/facebook-white.svg' className='h-6 md:mr-4' alt='facebook-logo'/>
          <img src='/social/twitter-white.svg' className='h-6 md:mr-4' alt='twitter-logo'/>
          <img src='/social/instagram-white.svg' className='h-6 md:mr-4' alt='instagram-logo'/>
        </div>
        <div className='flex w-full md:w-full md:justify-end justify-around'>
          <img src='/store/app-store.svg' className='h-8 md:ml-4' alt='appStore'/>
          <img src='/store/play-store.svg' className='h-8 md:ml-4' alt='playStore'/>
          <img src='/store/windows-store.svg' className='h-8 md:ml-4' alt='windowsStore'/>
        </div>
      </div>
      </div>
    </footer>
  )
}
