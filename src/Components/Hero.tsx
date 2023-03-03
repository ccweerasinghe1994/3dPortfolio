import React, { FC } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero: FC = () => {
  return (
    <section className={'relative w-full h-screen mx-auto'}>
      <div
        className={`${styles.paddingX} 
        absolute inset-0 top-[120px] 
        max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className={'flex flex-col justify-center items-center mt-5 '}>
          <div className={'h-5 w-5 rounded-full bg-[#915eff]'} />
          <div className={'w-1 sm:h-80 h-40 violet-gradient'} />
        </div>
        <div>
          <h1 className={`${styles.sectionHeadText} text-white`}>
            Hi, I'm <span className={'text-[#915eff]'}>CHAMARA</span>
          </h1>
          <p className={`${styles.sectionSubText}`}>
            I Develop FullStack WebApplications
            <br className={'sm:block hidden'} />
            using React Node POSTGRES
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
