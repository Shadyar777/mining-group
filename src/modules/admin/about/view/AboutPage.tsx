import { styled } from '@mui/material';
import AboutCompany from '../../home/components/aboutCompany/AboutCompany.tsx';
import Activity from '../components/activity/Activity.tsx';
import Strategy from '../components/strategy/Strategy.tsx';
import OurValues from '../components/ourValues/OurValues.tsx';

const StyledAboutPage = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '120px',
  marginTop: '90px',
  [breakpoints.down('sm')]: {
    gap: '60px',
  },
  [breakpoints.down('mobileSm')]: {
    // marginTop: '60px',
    flexDirection: 'unset',
    display: 'unset',
    gap: 'unset',
  },
}));

const AboutPage = () => {
  return (
    <StyledAboutPage>
      <AboutCompany />
      <OurValues />
      <Strategy />
      <Activity />
    </StyledAboutPage>
  );
};

export default AboutPage;
