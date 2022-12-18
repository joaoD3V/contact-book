import * as S from './styles';

type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return <S.Main>{children}</S.Main>;
}
