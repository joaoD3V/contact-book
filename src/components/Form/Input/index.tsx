import { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import * as S from './styles';

type InputProps = {
  icon: React.ReactElement;
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ icon, error = null, ...rest }, ref) => {
  return (
    <S.Wrapper isInvalid={!!error}>
      <div>
        {icon}
        <input {...rest} ref={ref} />
      </div>

      {!!error && <span>{error.message}</span>}
    </S.Wrapper>
  );
};

export const Input = forwardRef(InputBase);
