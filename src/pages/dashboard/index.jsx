import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Question from '../../components/Question';
import Footer from '../../components/Footer';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Question />
      <Footer />
    </div>
  );
}
