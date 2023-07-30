import { Link } from 'react-router-dom';

import { getLinks } from '../../../routers/useAppRoutes';
import { StyledLeftDrawer } from './styled';

// setIsOpen: (value: boolean) => void
const LeftDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const links = getLinks();

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
    </StyledLeftDrawer>
  );
};

export default LeftDrawer;
