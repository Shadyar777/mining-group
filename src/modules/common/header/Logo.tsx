import { Link } from 'react-router-dom';
import { StyledLogo } from './styled';

import logoSrc from '@public/svgs/logo.svg';

const Logo = () => {
  return (
    <StyledLogo>
      <Link className='logo__link' to={'/'}>
        <img alt='' className='logo__img' src={logoSrc} />
      </Link>
    </StyledLogo>
  );
};

export default Logo;
