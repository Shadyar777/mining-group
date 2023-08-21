import { ChangeEvent } from 'react';
import { Pagination as PaginationMui, styled } from '@mui/material';

const StyledPaginationMui = styled(PaginationMui)(() => ({
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',
}));

type PaginationProps = {
  count: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
};
const Pagination = ({ count = 0, onChange }: PaginationProps) => {
  return (
    <StyledPaginationMui onChange={onChange} count={count} shape='rounded' />
  );
};

export default Pagination;
