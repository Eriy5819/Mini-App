import React from 'react';
import image1 from '../../assets/images/illustrasi-landing-2-min.7e571b39.png';
import image2 from '../../assets/images/illustrasi-landing-3-min.827f5eb7.png';
import image3 from '../../assets/images/illustrasi-landing-4-min.b38b89e3.png';

export default function Question() {
  return (
    <div className='p-24 flex rounded-3xl'>
      <div className='bg-green-400 w-[1334px] h-[500px] rounded-3xl flex justify-around'>
        <div className='flex flex-col justify-evenly mx-10'>
          <div className='w-[420px] bg-white rounded-3xl drop-shadow-xl flex p-8 gap-10'>
            <img src={image1} alt='' className='w-20 h-20 my-auto' />
            <div className='gap-3 flex flex-col'>
              <h2 className='text-slate-800 text-xl font-medium'>
                Jawaban cepat, tepat & gratis
              </h2>
              <p className='text-slate-600 text-sm'>
                Dapatkan jawaban dalam hitungan menit dari ribuan programmer
                lainnya.
              </p>
            </div>
          </div>
          <div className='w-[420px] bg-white rounded-3xl drop-shadow-xl flex p-8 gap-10'>
            <img src={image2} alt='' className='w-20 h-20 my-auto' />
            <div className='gap-5 flex flex-col'>
              <h2 className='text-slate-800 text-xl font-medium'>
                Konsep Gamifikasi
              </h2>
              <p className='text-slate-600 text-sm'>
                Dapatkan badge menarik yang akan meningkatkan personal branding
                kamu sebagai seorang programmer
              </p>
            </div>
          </div>
        </div>
        <div className='bg-white drop-shadow-xl w-[408px] h-[410px] rounded-3xl my-auto p-4 text-center flex flex-col justify-evenly'>
          <img src={image3} alt='' className='w-40 h-40 mx-auto' />
          <h2 className='text-slate-800 text-xl font-medium'>
            Bangun Online Portofolio
          </h2>
          <p className='text-slate-600 text-sm'>
            Portofolio ibaratkan sebuah aset yang berharga bagi setiap orang.
            Semakin kamu aktif di dalam forum, semakin membuktikan bahwa kamu
            adalah programmer yang berkualitas.
          </p>
        </div>
        <div className='flex flex-col w-[408px] h-[410px] my-auto mx-10 gap-16'>
          <h1 className='text-4xl font-semibold tracking-tight text-gray-100'>
            Mengapa perlu menggunakan Kotakode?
          </h1>
          <p className='text-xl leading-6 tracking-tight text-gray-100'>
            Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode
            memberikan fasilitas guna mensejahterakan kehidupan penduduknya.
          </p>
        </div>
      </div>
    </div>
  );
}
