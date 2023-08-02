import { Link } from 'react-router-dom';

import { getLinks } from '../../../routers/useAppRoutes';
import { StyledLeftDrawer } from './styled';
import Languages from './Languages.tsx';
import { useMediaQuery, useTheme } from '@mui/material';

// setIsOpen: (value: boolean) => void
const LeftDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const links = getLinks();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileSm'));

  return (
    <StyledLeftDrawer anchor={'left'} open={isOpen} onClose={onClose}>
      <ul>
        {links.map(({ name, path }, idx) => {
          return (
            <li key={`name-${idx}`}>
              <Link to={path}>{name}</Link>
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
