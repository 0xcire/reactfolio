import { m, LazyMotion, domAnimation } from 'framer-motion';

const middleVariant = {
  open: { x1: 40 },
  closed: { x1: 80 },
};

const bottomVariant = {
  open: { x1: 40 },
  closed: { x1: 120 },
};

type Props = {
  mobileMenuOpen: boolean;
};

function Hamburger({ mobileMenuOpen }: Props) {
  return (
    <LazyMotion features={domAnimation}>
      <m.svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        fill='#f0ebd8'
        viewBox='0 0 256 256'
      >
        <rect width='24' height='24' fill='none'></rect>

        <line
          x1='40'
          y1='64'
          x2='216'
          y2='64'
          stroke='#f0ebd8'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
        ></line>

        <m.line
          x1='40'
          y1='128'
          x2='216'
          y2='128'
          stroke='#f0ebd8'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
          transition={{ duration: 0.15 }}
          animate={mobileMenuOpen ? 'open' : 'closed'}
          variants={middleVariant}
        ></m.line>

        <m.line
          x1='40'
          y1='192'
          x2='216'
          y2='192'
          stroke='#f0ebd8'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='16'
          transition={{ duration: 0.15 }}
          animate={mobileMenuOpen ? 'open' : 'closed'}
          variants={bottomVariant}
        ></m.line>
      </m.svg>
    </LazyMotion>
  );
}

export default Hamburger;
