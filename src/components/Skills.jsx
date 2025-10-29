import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Bootstrap from '../assets/boot.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import sql from '../assets/sql.png';
import java from '../assets/java.png';
import Manual from '../assets/manual.png';
import Automation from '../assets/automation.png';
import Android from '../assets/android.png';
import ios from '../assets/ios2.png';
import Api from '../assets/api.png';
import Performance from '../assets/performance.png';


import 'aos/dist/aos.css';
const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1100px] mx-auto px-6 sm:px-8 py-12 flex flex-col justify-center w-full'>
        <div>
          <p data-aos="slide-left" className='text-4xl font-bold inline border-b-4 border-cyan-600 text-white'>Skills</p>
          <p className='py-4 text-slate-300'>These are the technologies I've worked with:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-8'>
          {[
            { src: Automation, label: 'Automation Testing' },
            { src: Manual, label: 'Manual Testing' },
            { src: Android, label: 'Android Testing' },
            { src: ios, label: 'IOS Testing' },
            { src: java, label: 'JAVA' },
            { src: Performance, label: 'Performance Testing' },
            { src: Api, label: 'Api Testing' },
            { src: GitHub, label: 'GitHub' },
            { src: sql, label: 'SQL' },
            { src: HTML, label: 'HTML' },
            { src: CSS, label: 'CSS' },
            { src: Bootstrap, label: 'Bootstrap' },
          ].map((tech, index) => (
            <div
              key={index}
              className='rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-md hover:shadow-lg hover:scale-[1.02] duration-300 py-6 text-center'
            >
              <img className='w-16 sm:w-20 mx-auto' src={tech.src} alt={`${tech.label} icon`} />
              <p className='mt-4 text-sm sm:text-base font-medium text-white'>{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
