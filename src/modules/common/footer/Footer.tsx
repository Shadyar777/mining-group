import { NavLink } from 'react-router-dom';
import { Container } from '@mui/material';
import StyledFooter from './styled';
import { getLinksAdmin, getLinksLanding } from '../../../routers/appRoutes.tsx';
import Logo from '../header/Logo.tsx';

const Footer = ({ isAdmin }: { isAdmin?: boolean }) => {
  const links = isAdmin ? getLinksAdmin() : getLinksLanding();

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
                        }, 200);
                      }}
                      to={path}
                    >
                      {name}
                    </NavLink>
                  ) : (
                    <NavLink to={path}>{name}</NavLink>
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
