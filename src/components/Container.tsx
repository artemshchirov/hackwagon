import React, { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="p-10 text-black bg-white w-max h-max ">{children}</div>
  );
};

export default Container;
