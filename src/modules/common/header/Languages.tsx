import { MenuItem, Select } from '@mui/material';
import { StyledLanguages } from './styled';

const Languages = () => {
  const handleChange = () => {
    console.log('sjdvnjds');
  };
  return (
    <StyledLanguages fullWidth variant='outlined'>
      <Select
        defaultValue={10}
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
        <MenuItem value={10}>🇷🇺 RU</MenuItem>
        <MenuItem value={20}>🇰🇿 KK</MenuItem>
        <MenuItem value={30}>🇺🇸 ES</MenuItem>
      </Select>
    </StyledLanguages>
  );
};

export default Languages;
