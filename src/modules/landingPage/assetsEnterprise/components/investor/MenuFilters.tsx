import { MouseEvent } from 'react';
import { styled } from '@mui/material';
import {
  ChangeEvent,
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import TFilterPopoverProps from './FilterPopover.tsx';
import SearchInput from './SearchInput.tsx';
import iconFilter from '@public/svgs/icon-filter.svg';
import { QueryFieldsParams } from '../../../../../rtk-query/types/fields-types.ts';
import { useDebounce } from '../../../../../hooks/useDebounce.ts';

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

type MenuFiltersProps = {
  setFieldsParams: Dispatch<SetStateAction<QueryFieldsParams>>;
};
const MenuFilters = memo(({ setFieldsParams }: MenuFiltersProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const onOpenPopoverFilters = (event: MouseEvent<HTMLElement>) => {
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

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // Дополнительные действия поиска, если нужно
  };

  useEffect(() => {
    setFieldsParams((prevState) => ({
      ...prevState,
      title: debouncedSearchValue,
    }));
  }, [debouncedSearchValue, setFieldsParams]);

  return (
    <StyledMenuFilter className='investor__menu-filters'>
      <div className='menu-filters' onClick={onOpenPopoverFilters}>
        <div className='menu-filters__icon'>
          <img alt='' src={iconFilter} />
        </div>
        <div className='menu-filters__label'>Фильтры</div>
        <TFilterPopoverProps
          setFieldsParams={setFieldsParams}
          anchorEl={anchorEl}
          handlePopoverClose={onClosePopoverFilter}
        />
      </div>
      <div className='menu-filters__search'>
        <SearchInput value={searchValue} onChange={handleSearchChange} />
      </div>
    </StyledMenuFilter>
  );
});

export default MenuFilters;
