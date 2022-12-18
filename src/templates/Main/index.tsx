import { Navigation } from '../../components/Navigation';
import { useContact } from '../../contexts/ContactContext';
import * as S from './styles';

type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  const { view } = useContact();

  return (
    <S.Main>
      {children}
      {view !== 'initial' && <Navigation />}
    </S.Main>
  );
}
