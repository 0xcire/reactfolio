import { FC, PropsWithChildren, ReactNode, useState, useEffect } from 'react';

type TDelay = PropsWithChildren<{
  wait: number;
  children: ReactNode;
}>;

const Delay: FC<TDelay> = ({ wait, children }) => {
  const [reveal, setReveal] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReveal(true);
    }, wait);

    return () => clearTimeout(timer);
  }, [wait]);

  return reveal ? <>{children}</> : null;
};

export default Delay;
