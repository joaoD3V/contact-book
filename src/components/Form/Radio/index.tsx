import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './styles';

type InputProps = {
  name: string;
  id: string;
  children: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const RadioBase: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ name, id, children, ...rest }, ref) => {
  return (
    <S.Wrapper>
      <input type="radio" name={name} id={id} {...rest} ref={ref} />
      <label htmlFor={id}>{children}</label>
    </S.Wrapper>
  );
};

export const Radio = forwardRef(RadioBase);
