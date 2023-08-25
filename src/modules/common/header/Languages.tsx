import { useTranslation } from 'react-i18next';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { StyledLanguages } from './styled';
import { addGlobalLanguages } from '../sliceCommon/slice.ts';
import { useAppDispatch } from '../../../store/hooks.ts';
import { TLanguage } from '../types';

const Languages = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as TLanguage;
    i18n.changeLanguage(value).then((result) => {
      console.log(result);
    });
    dispatch(addGlobalLanguages(value));
  };

  return (
    <StyledLanguages fullWidth variant='outlined'>
      <Select
        defaultValue={'ru'}
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
        <MenuItem value={'ru'}>🇷🇺 RU</MenuItem>
        <MenuItem value={'kk'}>🇰🇿 KK</MenuItem>
        <MenuItem value={'en'}>🇺🇸 EN</MenuItem>
      </Select>
    </StyledLanguages>
  );
};

export default Languages;
