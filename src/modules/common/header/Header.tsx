import { useState } from 'react';
import { Container } from '@mui/material';
import { StyledHeader } from './styled';
import Languages from './Languages';

import Menu from './Menu';
import LeftDrawer from './LeftDrawer';
import Logo from './Logo.tsx';

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const onClickMenu = () => {
    setisOpen(true);
  };
  const onCloseDrawer = () => {
    setisOpen(false);
  };
  return (
    <>
      <StyledHeader>
        <Container maxWidth='lg'>
          <div className='header__conteiner'>
            <div>
              <Menu onClick={onClickMenu} />
            </div>
            <div className='header__language-and-logo'>
              <div>
                <Languages />
              </div>
              <div>
                <Logo />
              </div>
            </div>
          </div>
        </Container>
        <div className='header-bg__wive'>
          <img alt='' src='../../../../public/svgs/home-top-banner-wave.svg'/>
        </div>
      </StyledHeader>
      <LeftDrawer isOpen={isOpen} onClose={onCloseDrawer} />
    </>
  );
};

export default Header;
