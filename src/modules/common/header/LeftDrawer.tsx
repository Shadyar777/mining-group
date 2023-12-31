import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMediaQuery, useTheme } from '@mui/material';
import { getLinksAdmin, getLinksLanding } from '../../../routers/appRoutes.tsx';
import { StyledLeftDrawer } from './styled';
import Languages from './Languages.tsx';

const LeftDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin');
  const { t } = useTranslation('translation', { keyPrefix: 'nav' });
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
                  }}
                  to={path}
                >
                  {t(name)}
                </NavLink>
              ) : (
                <NavLink onClick={onClose} to={path}>
                  {t(name)}
                </NavLink>
              )}
            </li>
          );
        })}
        <div className='exit' onClick={onClose}>
          {isAdmin && <NavLink to='/'>Выйти</NavLink>}
        </div>
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
