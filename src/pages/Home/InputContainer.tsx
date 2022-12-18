import { FC } from 'react';

interface InputContainerProps {
  inputType: string;
  description: string;
  children: React.ReactNode;
}

const InputContainer: FC<InputContainerProps> = ({
  inputType,
  description,
  children,
}) => {
  return (
    <div className="field col-12 md:col-3">
      <span className="p-float-label">
        {children}
        <label htmlFor={inputType}>{description}</label>
      </span>
    </div>
  );
};

export default InputContainer;
