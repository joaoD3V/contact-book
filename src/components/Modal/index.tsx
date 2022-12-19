import { XCircle } from 'phosphor-react';
import ReactModal from 'react-modal';
import * as S from './styles';

type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function Modal({ isOpen, onRequestClose, title, children }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Wrapper>
        <S.ModalHeader>
          <h3>{title}</h3>
          <button type="button" title="Fechar modal" onClick={onRequestClose}>
            <XCircle width="28px" height="28px" />
          </button>
        </S.ModalHeader>
        {children}
      </S.Wrapper>
    </ReactModal>
  );
}
