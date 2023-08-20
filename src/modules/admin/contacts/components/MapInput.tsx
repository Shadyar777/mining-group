import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { styled, TextField } from '@mui/material';

const StyledMapInput = styled(TextField)({
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid #F28A2E',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: '2px solid #F28A2E',
  },
  '& .MuiInput-underline:after': {
    borderBottom: '2px solid #F28A2E',
  },
  '& .MuiInput-underline.Mui-error:after': {
    borderBottomColor: '#f44336',
  },
  '& .MuiInput-underline.Mui-disabled:before': {
    borderBottomStyle: 'dotted',
  },
});

type CustomInputProps = {
  className?: string;
  error?: boolean;
  inputValue: string;
  isValid: boolean;
  setInputValue: Dispatch<SetStateAction<string>>;
  setIsValid: Dispatch<SetStateAction<boolean>>;
};
const MapInput: FC<CustomInputProps> = ({
  className,
  error,
  inputValue,
  isValid,
  setInputValue,
  setIsValid,
}) => {
  const validateInput = (value: string) => {
    // Проверка на базовую структуру ссылки Google Maps без стилей
    const regex = /^https:\/\/www\.google\.com\/maps\/embed\?pb=/;
    return regex.test(value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (validateInput(value) || value === '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <StyledMapInput
      fullWidth
      className={className}
      type='text'
      variant='standard'
      placeholder='https://www.google.com/maps/embed?pb=!..'
      value={inputValue}
      onChange={handleInputChange}
      error={error}
      helperText={
        !isValid
          ? 'Введите корректную ссылку на Google Maps без стилей!'
          : undefined
      }
    />
  );
};

export default MapInput;
