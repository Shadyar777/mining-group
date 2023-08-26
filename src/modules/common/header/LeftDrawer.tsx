import { NavLink, useLocation } from 'react-router-dom';
import { getLinksAdmin, getLinksLanding } from '../../../routers/appRoutes.tsx';
import { StyledLeftDrawer } from './styled';
import Languages from './Languages.tsx';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LeftDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin');
  const { t } = useTranslation();
  const links = isAdmin ? getLinksAdmin() : getLinksLanding();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileSm'));

  return (
    <StyledLeftDrawer anchor={'left'} open={isOpen} onClose={onClose}>
      <ul>
        {links.map(({ name, path }, idx) => {
          return (
            <li key={`name-${idx}`}>
              {path.includes('#services') ? (
                <NavLink
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      const element = document.getElementById('services');
                      if (element)
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 200);
                  }}
                  to={path}
                >
                  {t(`nav.${name}`)}
                </NavLink>
              ) : (
                <NavLink onClick={onClose} to={path}>
                  {t(`nav.${name}`)}
                </NavLink>
              )}
            </li>
          );
        })}
        <Box>
          <NavLink to='/auth'>Auth</NavLink>
        </Box>
      </ul>
      {isMobile && (
        <div>
          <Languages />
        </div>
      )}
    </StyledLeftDrawer>
  );
};

export default LeftDrawer;
