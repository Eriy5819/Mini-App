import React from 'react';
import hero from '../../assets/images/hero.jpeg';

export default function Hero() {
  return (
    <div className='flex p-24'>
      <div className='mx-3 flex flex-col gap-5'>
        <h1 className='text-slate-900 text-5xl font-medium max-w-lg h-44 tracking-tight leading-tight'>
          Jadilah Bagian dari Komunitas Tech Terbesar di Indonesia
        </h1>
        <p className='text-slate-800 max-w-lg '>
          Ikutan diskusi forum tanya jawab, tulis blog dan Membangun portofolio
          semua di Kotakode
        </p>
        <div className=' gap-3 flex'>
          <input
            type='text'
            className='bg-white border h-11 w-44 p-3 text-sm   border-slate-400 rounded focus:border-orange-500 focus:outline-none'
            placeholder='Masukan Email Kamu'
          />
          <button className='bg-orange-500 w-32 h-11 rounded hover:bg-orange-400'>
            Daftar
          </button>
        </div>
        <div className='flex gap-3'>
          <div className='w-36 bg-pink-300 text-center flex-col p-3 rounded-3xl drop-shadow-2xl'>
            <h2 className='text-slate-900 text-3xl'>29993</h2>
            <p className='text-slate-900 text-xs'>User Bergabung</p>
          </div>
          <div className='w-36 bg-pink-300 text-center flex-col p-3 rounded-3xl drop-shadow-2xl'>
            <h2 className='text-slate-900 text-3xl'>1080</h2>
            <p className='text-slate-900 text-xs'>Blog Ditulis</p>
          </div>
          <div className='w-36 bg-pink-300 text-center flex-col p-3 rounded-3xl drop-shadow-2xl'>
            <h2 className='text-slate-900 text-3xl'>20182</h2>
            <p className='text-slate-900 text-xs'>
              Total pertanyaan dan Jawaban
            </p>
          </div>
        </div>
      </div>
      <div className='justify-center flex flex-col max-h-screen'>
        <img src={hero} alt='' />
      </div>
    </div>
  );
}
