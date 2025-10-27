import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import VantaBackground from './VantaBackground';



const Home = () => {
  return (
    <div name='home' className='relative overflow-hidden w-full bg-gradient-to-b from-[#0b1220] to-[#0a192f] z-20 min-h-screen'>
      
      <div className='max-w-[1100px] mx-auto px-6 sm:px-8 flex flex-col justify-center min-h-screen'>
          <VantaBackground />
        <p className='text-cyan-400/90 text-lg'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white drop-shadow-sm'>
          Muhammad Adnan
        </h1>
        <h2 className='text-3xl sm:text-6xl font-semibold text-slate-300'>
          I'm a SQA Engineer.
        </h2>
        <p className='text-slate-300/90 py-5 text-base sm:text-lg max-w-[720px]'>
        I specialize in ensuring the quality, reliability, and performance of web applications through comprehensive testing and analysis. With 2 years of experience in manual and automated QA, I’m passionate about delivering seamless user experiences by identifying issues early, optimizing testing processes, and collaborating closely with development teams to ensure every release meets the highest standards.</p>
        <div>
        <Link to="work" smooth={true} duration={500}>
          <button className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg active:scale-95 transition">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-1" />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
