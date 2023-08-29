import { useState } from 'react';
import { Container, useMediaQuery, useTheme } from '@mui/material';
import { StyledHeader } from './styled';
import Languages from './Languages';

import Menu from './Menu';
import LeftDrawer from './LeftDrawer';
import Logo from './Logo.tsx';

import waveImgSrc from '@public/svgs/home-top-banner-wave.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileSm'));

  const onClickMenu = () => {
    setIsOpen(true);
  };
  const onCloseDrawer = () => {
    setIsOpen(false);
  };
  return (
    <>
      <StyledHeader>
        <Container maxWidth='lg'>
          <div className='header__conteiner'>
            <Menu onClick={onClickMenu} />
            <div className='header__language-and-logo'>
              {!isMobile && (
                <div>
                  <Languages />
                </div>
              )}
              <div>
                <Logo />
              </div>
            </div>
          </div>
        </Container>
        {!isMobile && (
          <div className='header-bg__wive'>
            <img alt='' src={waveImgSrc} />
          </div>
        )}
      </StyledHeader>
      <LeftDrawer isOpen={isOpen} onClose={onCloseDrawer} />
    </>
  );
};

export default Header;
