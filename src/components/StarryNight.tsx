// idea from my firefox theme
// saw an implementation via this codepen: https://codepen.io/sharnajh/pen/WNvppRy

// stretch: big dipper constellation
// star count by screen size

import { LazyMotion, m, domAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const starVariants = {
  show: { opacity: 1 },
  hidden: { opacity: 0 },
};

const wishVariants = {
  show: {
    opacity: [0, 1, 0.5, 0],
    width: ['0px', '150px', '0px', '0px'],
    x: '-350px',
  },
};

function StarryNight() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const randomStarX = () =>
    Math.floor(Math.random() * Math.floor(width)).toString();
  const randomStarY = () =>
    Math.floor(Math.random() * Math.floor(height)).toString();
  const randomR = () => (Math.random() * 0.7 + 0.6 + 0.3).toString();
  const starDelay = (index: number) => Math.random() * index;

  const randomPercentage = () => Math.floor(Math.random() * 101);
  const wishDelay = (index: number) => Math.random() * index * 2;

  const getResizedDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    window.addEventListener('resize', getResizedDimensions);

    return () => window.removeEventListener('resize', getResizedDimensions);
  }, []);

  return (
    <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
      <svg className='sky absolute w-screen h-full bg-primary-dark z-[-3]'>
        <LazyMotion features={domAnimation}>
          {[...Array(60)].map((_star, index) => {
            return (
              <m.circle
                key={index}
                className='star'
                cx={randomStarX()}
                cy={randomStarY()}
                r={randomR()}
                stroke='none'
                strokeWidth='0'
                fill='#f0ebd8'
                initial={'hidden'}
                animate={'show'}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 1.5,
                  delay: starDelay(index),
                }}
                variants={starVariants}
              />
            );
          })}
        </LazyMotion>
      </svg>
      {/* TODO: is a potential perf optimization to create svg lines and animate
      the path drawing? could potentially solve weird off screen rotated parent div
      conundrum*/}
      <div className='shootingStars absolute top-0 w-[150vw] sm:w-[120vw] lg:w-[115vw] xl:w-[100vw] 2xl:w-[80vw] h-[100vh] lg:h-[120vh] xl:h-[130vh] 2xl:h-[110vh] -rotate-[30deg] translate-x-[-20%] sm:translate-x-[-10%] lg:translate-x-[-5%] xl:translate-x-[2.5%] 2xl:translate-x-[12%] sm:translate-y-[0%] lg:translate-y-[-5%] xl:translate-y-[-5%] 2xl:translate-y-[-5%] z-[-1]'>
        <LazyMotion features={domAnimation}>
          {[...Array(10)].map((_shootingStar, index) => {
            return (
              <m.div
                key={index}
                className='wish absolute h-[2px] w-[0px] p-0 bg-black opacity-0 bg-gradient-to-tr from-[#f0ebd8] to-[rgba(0, 0, 255, 0)]'
                style={{
                  top: `${randomPercentage()}%`,
                  left: `${randomPercentage()}%`,
                }}
                initial={'hidden'}
                animate={'show'}
                variants={wishVariants}
                transition={{
                  repeatType: 'loop',
                  repeat: Infinity,
                  duration: 1.5,
                  ease: 'easeOut',
                  delay: wishDelay(index),
                  repeatDelay: wishDelay(index),
                }}
              />
            );
          })}
        </LazyMotion>
      </div>
    </div>
  );
}

export default StarryNight;
