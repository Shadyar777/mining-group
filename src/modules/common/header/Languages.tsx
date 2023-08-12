import { MenuItem, Select } from '@mui/material';
import { StyledLanguages } from './styled';

const Languages = () => {
  const handleChange = () => {
    console.log('click');
  };
  return (
    <StyledLanguages fullWidth variant='outlined'>
      <Select
        defaultValue={1}
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
        <MenuItem value={1}>🇷🇺 RU</MenuItem>
        <MenuItem value={2}>🇰🇿 KK</MenuItem>
        <MenuItem value={3}>🇺🇸 EN</MenuItem>
      </Select>
    </StyledLanguages>
  );
};

export default Languages;
