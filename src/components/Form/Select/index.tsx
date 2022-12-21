import { forwardRef, SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import * as S from './styles';

type SelectProps = {
  name: string;
  icon?: React.ReactElement;
  label?: string;
  error?: FieldError;
  bgColor?: 'primary' | 'secondary';
  isSmall?: boolean;
  children: React.ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

const SelectBase: React.ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectProps
> = (
  {
    name,
    icon,
    label,
    error = null,
    bgColor = 'secondary',
    isSmall = false,
    children,
    ...rest
  },
  ref
) => {
  return (
    <S.Wrapprer isInvalid={!!error} isSmall={isSmall} bgColor={bgColor}>
      {!!label && <label htmlFor={name}>{label}</label>}

      <div>
        {!!icon && icon}
        <S.Select
          name={name}
          id={name}
          bgColor={bgColor}
          isSmall={isSmall}
          {...rest}
          ref={ref}
        >
          {children}
        </S.Select>
      </div>

      {!!error && <span>{error.message}</span>}
    </S.Wrapprer>
  );
};

export const Select = forwardRef(SelectBase);
