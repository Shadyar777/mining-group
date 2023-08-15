import { FC, ReactElement } from 'react';

const Wrapper: FC<{
  children: ReactElement;
}> = ({ children }) => {
  return <>{children}</>;
};

export default Wrapper;
