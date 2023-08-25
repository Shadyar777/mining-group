import { ChangeEvent, FC, forwardRef } from 'react';
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
  name?: string;
  value?: string | number;
  type?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean;
  helperText?: string;
};

const EditCustomInput: FC<CustomInputProps> = forwardRef<
  HTMLInputElement,
  CustomInputProps
>(
  (
    {
      name,
      value,
      type = 'text',
      placeholder,
      onChange,
      className,
      error,
      helperText,
    },
    ref,
  ) => {
    return (
      <StyledEditCustomInput
        fullWidth
        name={name}
        type={type}
        className={className}
        variant='standard'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
        helperText={helperText}
        inputRef={ref} // передача ref
      />
    );
  },
);

export default EditCustomInput;
