import React, { FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full p-6 text-black bg-white lg:p-10 h-max ">
      {children}
    </div>
  );
};

export default Container;
