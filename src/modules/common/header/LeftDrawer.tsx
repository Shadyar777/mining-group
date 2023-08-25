import { NavLink } from 'react-router-dom';
import { getLinksAdmin, getLinksLanding } from '../../../routers/appRoutes.tsx';
import { StyledLeftDrawer } from './styled';
import Languages from './Languages.tsx';
import { useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LeftDrawer = ({
  isOpen,
  onClose,
  isAdmin,
}: {
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'nav' });
  const links = isAdmin ? getLinksAdmin() : getLinksLanding();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileSm'));

  console.log(t('aboutCompany'));

  return (
    <StyledLeftDrawer anchor={'left'} open={isOpen} onClose={onClose}>
      <ul>
        {links.map(({ name, path }, idx) => {
          console.log(t(name));
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
