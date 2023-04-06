import React from 'react';
import logoBlock from '../../assets/images/block71.f06f3442.svg';
import logoGoogle from '../../assets/images/Google_for_Startups_logo.3a4b3b10.svg';

export default function Footer() {
  return (
    <footer className='bg-slate-900 p-28 flex flex-col gap-10'>
      <div className='flex justify-evenly'>
        <div>
          Bagian Dari
          <div className='flex gap-5'>
            <img src={logoBlock} alt='' />
            <img
              src={logoGoogle}
              alt=''
              className='w-52 bg-white h-10 rounded my-auto'
            />
          </div>
        </div>
        <div>
          <p className='font-semibold'>Produk</p>
          <p className='text-slate-500'>Pertanyaan</p>
          <p className='text-slate-500'>Blog</p>
          <p className='text-slate-500'>Pengguna</p>
          <p className='text-slate-500'>Events</p>
          <p className='text-slate-500'>Partnership</p>
        </div>
        <div>
          <p className='font-semibold'>Perusahaan</p>
          <p className='text-slate-500'>About</p>
          <p className='text-slate-500'>FAQ</p>
          <p className='text-slate-500'>Rules</p>
          <p className='text-slate-500'>Legal</p>
        </div>
        <div>
          <p className='font-semibold'>Hubungi Kami</p>
          <p className='text-slate-500'>petertanugraha@kotakode.com</p>
        </div>
      </div>
      <div className='mx-auto tracking-tight'>
        <p>PT. Kota Digital Nusantara </p>
        <p> Copyright 2020 Kotakode. All rights</p>
        <p>reserved Made with ❤️ in 🇮🇩</p>
      </div>
    </footer>
  );
}
