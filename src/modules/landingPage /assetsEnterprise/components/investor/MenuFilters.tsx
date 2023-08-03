import { styled } from '@mui/material';

const StyledMenuFilter = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .menu-filters': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .menu-filters__icon': {
    display: 'flex',
    gap: '0 16px',
  },
  '& .menu-filters__label': {
    color: '#000',
    fontSize: '16px',
    fontWeight: 400,
  },
  '& .menu-filters__search': {
    borderRadius: '30px',
    background: 'rgba(255, 255, 255, 0.90)',
  },

  [breakpoints.down('sm')]: {
    // gap: '60px',
  },
}));

const MenuFilters = () => {
  return (
    <StyledMenuFilter className='investor__menu-filters'>
      <div className='menu-filters'>
        <div className='menu-filters__icon'>
          <img alt='' src='../../../../../../public/svgs/icon-filter.svg' />
        </div>
        <div className='menu-filters__label'>Фильтры</div>
      </div>
      <div className='menu-filters__search'>
        <input type='text' />
      </div>
    </StyledMenuFilter>
  );
};

export default MenuFilters;
