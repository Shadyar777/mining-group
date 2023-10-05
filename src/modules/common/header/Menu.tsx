import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledMenu } from './styled';

const Menu = ({ onClick }: { onClick: () => void }) => {
  return (
    <StyledMenu>
      <div className='box-icon'>
        <IconButton
          onClick={onClick}
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </StyledMenu>
  );
};

export default Menu;
