import { Container, styled, Typography } from '@mui/material';

const StyledPressCenterTitle = styled('div')(({ theme: { breakpoints } }) => ({
  '& .press-center__title': {
    color: '#004B8F',
    fontWeight: 700,
    textAlign: 'center',
  },

  [breakpoints.down('sm')]: {},
  [breakpoints.down('mobileSm')]: {
    background: '#FFF8EC',
    '& .press-center__title': {
      padding: '32px 0',
      fontSize: '24px',
    },
  },
}));

type PressCenterTitleProps = {
  title: string;
};
const PressCenterTitle = ({ title }: PressCenterTitleProps) => {
  return (
    <StyledPressCenterTitle>
      <Container maxWidth='md'>
        <Typography variant='h3' className='press-center__title'>
          {title}
        </Typography>
      </Container>
    </StyledPressCenterTitle>
  );
};

export default PressCenterTitle;
