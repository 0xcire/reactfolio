import { FC, PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{ children?: JSX.Element }>;

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-[1400px] 2k:mx-auto' data-testid='container'>
      {children}
    </div>
  );
};

export default Container;
