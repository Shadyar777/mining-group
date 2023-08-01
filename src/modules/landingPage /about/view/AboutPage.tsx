import { Box } from '@mui/material';

import AboutCompany from '../components/aboutCompany/AboutCompany.tsx';
import Activity from '../components/activity/Activity.tsx';
import Strategy from '../components/strategy/Strategy.tsx';
import OurValues from '../components/ourValues/OurValues.tsx';

const AboutPage = () => {
  return (
    <Box display='flex' flexDirection='column' gap='80px 0' marginTop='220px'>
      <AboutCompany />
      <OurValues />
      <Strategy />
      <Activity />
    </Box>
  );
};

export default AboutPage;
