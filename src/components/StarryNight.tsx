// idea from my firefox theme
// saw an implementation via this codepen: https://codepen.io/sharnajh/pen/WNvppRy
// stretch: big dipper constellation
// star count by screen size
import { useEffect, useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

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
    <div className='pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden'>
      <svg className='sky absolute left-0 z-[-3] h-full w-screen bg-primary-dark'>
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
      <div className='shootingStars absolute top-0 z-[-1] h-[100vh] w-[150vw] translate-x-[-20%] -rotate-[30deg] sm:w-[120vw] sm:translate-x-[-10%] sm:translate-y-[0%] lg:h-[120vh] lg:w-[115vw] lg:translate-x-[-5%] lg:translate-y-[-5%] xl:h-[130vh] xl:w-[100vw] xl:translate-x-[2.5%] xl:translate-y-[-5%] 2xl:h-[110vh] 2xl:w-[80vw] 2xl:translate-x-[12%] 2xl:translate-y-[-5%]'>
        <LazyMotion features={domAnimation}>
          {[...Array(10)].map((_shootingStar, index) => {
            return (
              <m.div
                key={index}
                className='wish to-[rgba(0, 0, 255, 0)] absolute h-[2px] w-[0px] bg-black bg-gradient-to-tr from-text-dark p-0 opacity-0'
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
