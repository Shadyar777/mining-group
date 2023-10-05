import { ClickAwayListener, styled } from '@mui/material';
import React, {
  ChangeEvent,
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import SearchInput from './SearchInput.tsx';
import iconFilter from '@public/svgs/icon-filter.svg';
import { QueryFieldsParams } from '../../../../../rtk-query/types/fields-types.ts';
import { useDebounce } from '../../../../../hooks/useDebounce.ts';
import TFilterPopover from '../../../../landingPage/assetsEnterprise/components/investor/FilterPopper.tsx';

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

  [breakpoints.down('mobileSm')]: {
    flexWrap: 'wrap',
    gap: '20px 0',
  },
}));

type MenuFiltersProps = {
  setFieldsParams: Dispatch<SetStateAction<QueryFieldsParams>>;
  paramResources: QueryFieldsParams['resources'];
};

const MenuFilters = memo(
  ({ setFieldsParams, paramResources }: MenuFiltersProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearchValue = useDebounce(searchValue, 1000);
    const onOpenPopoverFilters = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const onClosePopoverFilter = () => {
      // setAnchorEl(() => null)
      // FIXME: Тут не понятный баг. Если использовать setState, почему-то значение не обнуляется
      //  Пришлось обойти баг при помощью макрозадачей. Может быть из за batching-га react-та
      setTimeout(() => {
        setAnchorEl(() => null);
      }, 20);
    };

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    };

    const handleClickAway = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    useEffect(() => {
      setFieldsParams((prevState) => ({
        ...prevState,
        title: debouncedSearchValue,
        page: 1,
      }));
    }, [debouncedSearchValue, setFieldsParams]);

    return (
      <ClickAwayListener onClickAway={handleClickAway}>
        <StyledMenuFilter className='investor__menu-filters'>
          <div className='menu-filters' onClick={onOpenPopoverFilters}>
            <div className='menu-filters__icon'>
              <img alt='' src={iconFilter} />
            </div>
            <div className='menu-filters__label'>Фильтры</div>
            {open ? (
              <TFilterPopover
                setFieldsParams={setFieldsParams}
                anchorEl={anchorEl}
                handlePopoverClose={onClosePopoverFilter}
                paramResources={paramResources}
              />
            ) : null}
          </div>
          <div className='menu-filters__search'>
            <SearchInput value={searchValue} onChange={handleSearchChange} />
          </div>
        </StyledMenuFilter>
      </ClickAwayListener>
    );
  },
);

export default MenuFilters;
