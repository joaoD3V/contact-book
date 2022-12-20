import { forwardRef, SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import * as S from './styles';

type SelectProps = {
  name: string;
  label?: string;
  error?: FieldError;
  children: React.ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

const SelectBase: React.ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectProps
> = ({ name, label, error = null, children, ...rest }, ref) => {
  return (
    <S.Wrapprer>
      {!!label && <label htmlFor={name}>{label}</label>}
      <S.Select isInvalid={!!error} name={name} id={name} {...rest} ref={ref}>
        {children}
      </S.Select>

      {!!error && <span>{error.message}</span>}
    </S.Wrapprer>
  );
};

export const Select = forwardRef(SelectBase);
