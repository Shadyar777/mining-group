import { styled } from '@mui/material';
import React, { useState } from 'react';
import TFilterPopoverProps from './FilterPopover.tsx';
import SearchInput from './SearchInput.tsx';

const StyledMenuFilter = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: '32px 0',
  justifyContent: 'space-between',
  '& .menu-filters': {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    gap: '0 16px',
    marginRight: '90px',
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
    width: '100%',
    borderRadius: '30px',
    background: 'rgba(255, 255, 255, 0.90)',
  },

  [breakpoints.down('sm')]: {
    // gap: '60px',
  },
}));

const MenuFilters = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const onOpenPopoverFilters = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClosePopoverFilter = () => {
    // setAnchorEl(() => null)
    // FIXME: Тут не понятный баг. Если использовать setState, почему-то значение не обнуляется
    //  Пришлось обойти баг при помощью макрозадачей. Может быть и за batching-га реакта
    setTimeout(() => {
      setAnchorEl(() => null);
    }, 20);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    // Дополнительные действия поиска, если нужно
  };

  return (
    <StyledMenuFilter className='investor__menu-filters'>
      <div className='menu-filters' onClick={onOpenPopoverFilters}>
        <div className='menu-filters__icon'>
          <img alt='' src='../../../../../../public/svgs/icon-filter.svg' />
        </div>
        <div className='menu-filters__label'>Фильтры</div>
        <TFilterPopoverProps
          anchorEl={anchorEl}
          handlePopoverClose={onClosePopoverFilter}
        />
      </div>
      <div className='menu-filters__search'>
        <SearchInput value={searchValue} onChange={handleSearchChange} />
      </div>
    </StyledMenuFilter>
  );
};

export default MenuFilters;
