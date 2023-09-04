import { NavLink, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import StyledFooter from './styled';
import { getLinksAdmin, getLinksLanding } from '../../../routers/appRoutes.tsx';
import Logo from '../header/Logo.tsx';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin');
  const { t } = useTranslation('translation', { keyPrefix: 'nav' });
  const footerLinks = isAdmin ? getLinksAdmin() : getLinksLanding();
  const links = footerLinks.filter((link) => link.name !== 'main');
  return (
    <StyledFooter>
      <Container maxWidth='lg'>
        <div className='footer__conteiner'>
          <div className='footer__logo'>
            <Logo />
          </div>
          {/*<div className='footer__list-links'>*/}
          <ul className='footer__list-links'>
            {links.map(({ name, path }, idx) => {
              return (
                <li key={`name-${idx}`}>
                  {path.includes('#services') ? (
                    <NavLink
                      onClick={() => {
                        setTimeout(() => {
                          const element = document.getElementById('services');
                          if (element)
                            element.scrollIntoView({ behavior: 'smooth' });
                        }, 1000);
                      }}
                      to={path}
                    >
                      {t(name)}
                    </NavLink>
                  ) : (
                    <NavLink to={path}> {t(name)}</NavLink>
                  )}
                </li>
              );
            })}
          </ul>
          {/*</div>*/}
          <div className='footer-text__rights-reserved'>
            © TOO “Invest Mining Group” | All rights reserved.
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
