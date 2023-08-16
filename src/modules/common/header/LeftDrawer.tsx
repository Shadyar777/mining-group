import { NavLink } from 'react-router-dom';
import { getLinksAdmin, getLinksLanding } from '../../../routers/appRoutes.tsx';
import { StyledLeftDrawer } from './styled';
import Languages from './Languages.tsx';
import { useMediaQuery, useTheme } from '@mui/material';

const LeftDrawer = ({
  isOpen,
  onClose,
  isAdmin,
}: {
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
}) => {
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
                  {name}
                </NavLink>
              ) : (
                <NavLink onClick={onClose} to={path}>
                  {name}
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
