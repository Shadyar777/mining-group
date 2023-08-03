import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import StyledFooter from './styled';
import { getLinks } from '../../../routers/useAppRoutes';
import Logo from '../header/Logo.tsx';

const Footer = () => {
  const links = getLinks();
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
                  <Link to={path}>{name}</Link>
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
