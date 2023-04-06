import React from 'react';
import logo from '../../assets/images/kotakode-logo.3befef90.svg';

export default function Navbar() {
  return (
    <div className='border-b-4 border-orange-500 w-screen flex justify-around fixed bg-white z-10'>
      <a href='/dashboard'>
        <img src={logo} alt='kotakkode-logo' className='w-32 p-5 ' />
      </a>
      <div>
        <ul className='flex p-5 '>
          <li>
            <a
              href='#'
              className='text-gray-500 font-semibold p-3 mx-3 hover:ring-1 ring-green-500 rounded'
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-500 font-semibold p-3 mx-3 hover:ring-1 ring-green-500 rounded'
            >
              Produk
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-500 font-semibold p-3 mx-3 hover:ring-1 ring-green-500 rounded'
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-500 font-semibold p-3 mx-3 hover:ring-1 ring-green-500 rounded'
            >
              Events
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-gray-500 font-semibold p-3 mx-3 hover:ring-1 ring-green-500 rounded'
            >
              Partnership
            </a>
          </li>
          <li>
            <a
              href='/movie'
              className='text-gray-500 font-semibold p-3 mx-3 hover:ring-1 ring-green-500 rounded'
            >
              Movie
            </a>
          </li>
        </ul>
      </div>
      <div className='p-3'>
        <button
          type='submit'
          className='border border-green-500 text-green-500 p-2 px-8  rounded mx-3 hover:bg-green-400 hover:text-white'
        >
          Masuk
        </button>
        <button
          type='submit'
          className='border border-green-500 text-white bg-green-600 p-2 px-8  rounded mx-3 hover:bg-green-400 hover:text-white'
        >
          Daftar
        </button>
      </div>
    </div>
  );
}
