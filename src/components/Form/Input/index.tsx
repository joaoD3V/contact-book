import { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import * as S from './styles';

type InputProps = {
  name: string;
  label?: string;
  icon?: React.ReactElement;
  error?: FieldError;
  bgColor?: 'primary' | 'secondary';
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (
  { name, label, icon, error = null, bgColor = 'secondary', ...rest },
  ref
) => {
  return (
    <S.Wrapper isInvalid={!!error} bgColor={bgColor}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <div>
        {!!icon && icon}
        <input name={name} id={name} {...rest} ref={ref} />
      </div>

      {!!error && <span>{error.message}</span>}
    </S.Wrapper>
  );
};

export const Input = forwardRef(InputBase);
