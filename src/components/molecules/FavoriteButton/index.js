import * as S from './styles';

const FavoriteButton = ({ $active, ...props }) => (
  <S.FavoriteButton {...props}>
    <S.HeartIcon $active={$active} />
  </S.FavoriteButton>
);

export default FavoriteButton;
