import logoImg from '../../assets/logo.svg';

import * as S from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova tansação
        </button>
      </S.Content>
    </S.Container>
  );
}
