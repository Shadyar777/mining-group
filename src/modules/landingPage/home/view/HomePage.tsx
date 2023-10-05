import { styled } from '@mui/material';
import TopBanner from '../components/topBanner/TopBanner.tsx';
import Resources from '../components/resources/Resources.tsx';
import AboutCompany from '../components/aboutCompany/AboutCompany.tsx';
import FindOutMore from '../components/findOutMore/FindOutMore.tsx';

export const StyledHomePage = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '120px',
  [breakpoints.down('sm')]: {
    gap: '60px',
  },
  [breakpoints.down('mobileSm')]: {
    flexDirection: 'unset',
    gap: 'unset',
    display: 'grid',
    gridTemplateAreas: `"TopBanner" "AboutCompany" "Resources" "FindOutMore"`,
    gridTemplateColumns: '100%',
  },
}));

const HomePage = () => {
  return (
    <StyledHomePage>
      <TopBanner />
      <Resources />
      <AboutCompany />
      <FindOutMore />
    </StyledHomePage>
  );
};

export default HomePage;
