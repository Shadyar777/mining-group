import TopBanner from '../components/topBanner/TopBanner.tsx';
import Resources from '../components/resources/Resources.tsx';
import AboutCompany from '../components/aboutCompany/AboutCompany.tsx';
import FindOutMore from '../components/findOutMore/FindOutMore.tsx';
import { styled } from '@mui/material';
// import { useGetPostsQuery } from '../../../../store/rtkQuery.ts';

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
  // const { data, error, isLoading } = useGetPostsQuery();
  // console.log('isLoading', isLoading);
  // console.log('data', data);
  // console.log('error', error);
  // console.log('isLoading', isLoading);
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
