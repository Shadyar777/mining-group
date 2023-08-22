import { useMemo } from 'react';
import { Container, styled } from '@mui/material';
import PressCenterTitle from '../components/pressCenterPage/PressCenterTitle.tsx';
import PdfViewer from '../components/pdfViewer/PdfViewer.tsx';
import Slider from '../components/slider/Slider.tsx';
import { useGetFieldsPrivateByIdQuery } from '../../../../rtk-query';
import { useAppSelector } from '../../../../store/hooks.ts';
import { parseImgBase64 } from '../../../../utils';
import { useNavigate } from 'react-router-dom';
import GoogleMaps from '../components/googleMap/GoogleMap.tsx';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DownloadButton from '../../../common/buttons/DownloadButton.tsx';
import LoadingSpinner from '../../../common/loadingSpinner';
import { getAddGlobalLanguages } from '../../../common/sliceCommon/slice.ts';

const StyledPressCenterPage = styled('div')(({ theme: { breakpoints } }) => ({
  marginTop: '30px',
  '& .press-content': {
    display: 'flex',
    flexDirection: 'column',
    gap: '80px 0',
  },
  '& .press__pdf-block': {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px 0',

    '& .download-button': {
      alignSelf: 'center',
    },
  },

  [breakpoints.down('sm')]: {},
  [breakpoints.down('mobileSm')]: {
    marginTop: '0px',
  },
}));

const PressCenterPage = () => {
  const navigate = useNavigate();
  const goToHome = () => navigate('/', { replace: false });
  const lng = useAppSelector(getAddGlobalLanguages);
  const privateId = useAppSelector((state) => state.admin.private.id);
  const { data, isLoading, isError } = useGetFieldsPrivateByIdQuery({
    id: privateId,
    // id: 27,
    lng,
  });

  const pdfURL = useMemo(() => {
    return data?.data.mainFile?.data
      ? parseImgBase64({
          data: data.data.mainFile.data || '',
          type: data.data.mainFile.data || '',
        })
      : '';
  }, [data?.data.mainFile.data]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    goToHome();
    return;
  }
  if (!data) {
    return;
  }

  console.log('useGetFieldsPrivateByIdQuery', data);
  const images = data?.data.images.map(({ data, type }) => {
    return parseImgBase64({
      data: data || '',
      type: type || '',
    });
  });

  return (
    <StyledPressCenterPage>
      <Container maxWidth='md'>
        <div className='press-content'>
          <PressCenterTitle title={data.data.title} />

          <div className='press__pdf-block'>
            <PdfViewer pdfURL={pdfURL} />
            <DownloadButton
              text='Загрузить файл'
              icon={<AddPhotoAlternateIcon />}
              href={pdfURL as string}
              download
            />
          </div>
          <Slider images={images} />
          <GoogleMaps srcGoogle={data.data.location} />
        </div>
      </Container>
    </StyledPressCenterPage>
  );
};

export default PressCenterPage;
