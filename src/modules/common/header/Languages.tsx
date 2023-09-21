import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from '@mui/material';
import { StyledLanguages } from './styled';
import { addGlobalLanguages } from '../sliceCommon/slice.ts';
import { useAppDispatch } from '../../../store/hooks.ts';
import { TLanguage } from '../types';

import kkIcon from './../../../../public/svgs/languages/kazakhstan.svg';
import ruIcon from './../../../../public/svgs/languages/russia.svg';
import enIcon from './../../../../public/svgs/languages/united-kingdom.svg';

const sxProps: SxProps<Theme> | undefined = { display: 'flex', gap: '0 8px' };

const Languages = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const [defaultLanguage, setDefaultLanguage] = useState('ru');
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as TLanguage;
    i18n.changeLanguage(value).then(() => {
      sessionStorage.setItem('selectedLanguage', value);
    });
    dispatch(addGlobalLanguages(value));
    setDefaultLanguage(value);
  };

  useEffect(() => {
    const savedLanguage = sessionStorage.getItem(
      'selectedLanguage',
    ) as TLanguage | null;
    if (savedLanguage) {
      i18n?.changeLanguage(savedLanguage);
      dispatch(addGlobalLanguages(savedLanguage ?? 'ru'));
    }
    setDefaultLanguage(savedLanguage ?? 'ru');
  }, [dispatch, i18n]);

  return (
    <StyledLanguages fullWidth variant='outlined'>
      <Select
        value={defaultLanguage}
        onChange={handleChange}
        className='languages__select'
        inputProps={{ IconComponent: () => null }}
        sx={{
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: '2px solid white' },
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              border: '2px solid white',
            },
        }}
      >
        <MenuItem sx={sxProps} value={'ru'}>
          <img src={ruIcon} alt={'RU'} /> <span>RU</span>
        </MenuItem>
        <MenuItem sx={sxProps} value={'kk'}>
          <img src={kkIcon} alt={'KK'} /> <span>KK</span>
        </MenuItem>
        <MenuItem sx={sxProps} value={'en'}>
          <img src={enIcon} alt={'EN'} /> <span>EN</span>
        </MenuItem>
      </Select>
    </StyledLanguages>
  );
};

export default Languages;
