import { Breadcrumbs, Nav } from '@components';
import { StyledHeader } from './index.styles';

const Header = () => {
  return (
    <StyledHeader>
      <Nav />

      <Breadcrumbs />
    </StyledHeader>
  );
};

export default Header;
