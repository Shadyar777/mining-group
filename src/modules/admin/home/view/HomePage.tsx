import { styled, useMediaQuery, useTheme } from '@mui/material';
import TopBanner from '../components/topBanner/TopBanner.tsx';
import AboutCompany from '../components/aboutCompany/AboutCompany.tsx';
import FindOutMore from '../components/findOutMore/FindOutMore.tsx';
import TradingViewWidget from '../../../landingPage/home/components/resources/Resources.tsx';

export const StyledHomePage = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
  [breakpoints.down('sm')]: {
    gap: '60px',
  },
  [breakpoints.down('mobileSm')]: {
    // marginTop: '60px',
    flexDirection: 'unset',
    gap: 'unset',
    display: 'grid',
    gridTemplateAreas: `"AboutCompany" "Resources" "FindOutMore"`,
    gridTemplateColumns: '100%',
  },
}));

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mobileSm'));
  return (
    <StyledHomePage>
      {!isMobile && <TopBanner />}
      <TradingViewWidget />
      <AboutCompany />
      <FindOutMore />
    </StyledHomePage>
  );
};

export default HomePage;
