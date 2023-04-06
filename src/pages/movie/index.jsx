import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Movie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=689ef1bb4ab275a7692154c928adc746&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  console.log(data);
  return (
    <div>
      <Navbar />

      <div className='h-96 p-24 flex flex-col mb-56'>
        <h1 className='text-green-500 font-bold text-3xl border-s-4 border-orange-500 outline-none'>
          Upcoming Movie
        </h1>
        <div className='my-5 flex flex-wrap gap-5'>
          {data.results.map((data, i) => (
            <div className='bg-green-500 p-5 rounded-lg' key={i}>
              <div className='text-white'>
                <span className='font-semibold'>Title: </span>
                {data.title}
              </div>
              <div>★ {data.vote_average}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
