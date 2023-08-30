import { FC, useState, MouseEvent } from 'react';
import {
  Menu,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  IconButton,
} from '@mui/material';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

const CardMenu: FC<Props> = ({ onEdit, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDeleteConfirm = () => {
    setOpenDeleteConfirm(true);
    handleCloseMenu();
  };

  const handleConfirmedDelete = () => {
    onDelete();
    setOpenDeleteConfirm(false);
  };

  return (
    <>
      <IconButton className='img__more-vert' onClick={handleOpenMenu}>
        <MoreVertRoundedIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem
          onClick={() => {
            onEdit();
            handleCloseMenu();
          }}
        >
          Редактировать
        </MenuItem>
        <MenuItem onClick={handleDeleteConfirm}>Удалить</MenuItem>
      </Menu>

      <Dialog
        open={openDeleteConfirm}
        onClose={() => setOpenDeleteConfirm(false)}
      >
        <DialogTitle>Подтвердить удаление</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы уверены, что хотите удалить этот элемент?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteConfirm(false)}>Отменить</Button>
          <Button onClick={handleConfirmedDelete} color='primary'>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardMenu;
