import { styled } from '@mui/material';
import { FC } from 'react';

const StyledTitleEdit = styled('div')(() => ({
  color: '#6A6A6A',
  fontSize: '16px',
  fontWeight: 400,
}));

type TitleEditProps = {
  children: JSX.Element | string;
  className?: string;
};
const TitleEdit: FC<TitleEditProps> = ({ children, className }) => {
  return <StyledTitleEdit className={className}>{children}</StyledTitleEdit>;
};

export default TitleEdit;
