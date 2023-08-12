import { ChangeEvent, FC, forwardRef, useState } from 'react';
import { styled, TextField } from '@mui/material';

const StyledEditCustomInput = styled(TextField)({
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
  value?: string | number;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  error?: boolean;
  helperText?: string;
};
const EditCustomInput: FC<CustomInputProps> = forwardRef(
  ({
    value: propValue,
    placeholder,
    onChange,
    className,
    error,
    helperText,
  }) => {
    const [value, setValue] = useState(propValue || '');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
      if (onChange) {
        onChange(event.target.value);
      }
    };

    return (
      <StyledEditCustomInput
        fullWidth
        className={className}
        type='text'
        variant='standard'
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        error={error}
        helperText={helperText}
      />
    );
  },
);

export default EditCustomInput;
