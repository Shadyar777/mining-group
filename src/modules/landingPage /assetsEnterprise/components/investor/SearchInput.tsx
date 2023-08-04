import { ChangeEvent } from 'react';
import { TextField, InputAdornment, IconButton, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const StyledTextField = styled(TextField)(({ theme: { breakpoints } }) => ({
  width: '100%',
  height: '40px',

  '& .MuiOutlinedInput-root': {
    height: '100%',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },

  '& .MuiTextField-root' : {
    height: '100%',
  },
  '& .MuiOutlinedInput-input' : {
    height: '6px',
  },


  [breakpoints.down('sm')]: {
    // gap: '60px',
  },
}));

type SearchInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <StyledTextField
      value={value}
      onChange={onChange}
      variant='outlined'
      placeholder=''
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <IconButton disabled>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
