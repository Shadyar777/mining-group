import { Container, styled, Typography } from '@mui/material';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import EditImage from '../../../../admin/common/EditImage.tsx';
import { useEffect, useState } from 'react';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';
import {
  useGetGeoProdQuery,
  useUpdateGeoProdMutation,
} from '../../../../../rtk-query';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { createFormData } from '../../../../../utils';
import TitleEdit from '../../../common/TitleEdit.tsx';
import { getUploadedImageToBase64 } from '../../../../../utils/getUploadedImageToBase64.ts';

const StyledMapOfKazakhstan = styled('div')(({ theme: { breakpoints } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '120px',
  marginTop: '50px',

  '& .border-bottom': {
    borderBottom: '1px solid red',
  },

  '& .map__content': {
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
  },
  '& .map__image': {
    display: 'flex',
    flexDirection: 'column',
    width: 'clamp(100%, 50%, 700px)',
    img: {
      width: '100%',
      height: '100%',
    },

    '& .upload-button': {
      marginTop: '30px',
      alignSelf: 'center',
    },
  },
  '& .map__text': {
    marginTop: '120px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '& .text__quote': {
      color: '#F28A2E',
      fontSize: '36px',
      fontWeight: '500',
      alignSelf: 'start',
    },
    '& .text__author': {
      color: '#004B8F',
      fontSize: '24px',
      fontWeight: '500',
      alignSelf: 'end',
      width: '100%',
      textAlign: 'end',
    },
  },

  [breakpoints.down('sm')]: {
    gap: '60px',

    '& .map__content': {},
    '& .map__image': {
      img: {},
    },
    '& .map__text': {
      padding: '10px 0',
      '& .text__quote': {
        fontSize: '20px',
      },
      '& .text__author': {
        marginTop: '24px',
        fontSize: '16px',
      },
    },
  },
}));

const MapOfKazakhstan = () => {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const [imageBase64, setImageBase64] = useState<string | null>('');
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data } = useGetGeoProdQuery(lng);
  const [updateGeoProd, { isLoading }] = useUpdateGeoProdMutation();

  const {
    content: contentTitle,
    ref: contentRefTitle,
    handleBlur: handleContentTitle,
    handlePaste: handlePasteTitle,
    setContent: setContentTitle,
  } = useEditableContent(``);

  const {
    content: contentAuthor,
    ref: contentRefAuthor,
    handleBlur: handleContentAuthor,
    handlePaste: handlePasteAuthor,
    setContent: setContentAuthor,
  } = useEditableContent(``);

  const {
    content: contentText,
    ref: contentRefText,
    handleBlur: handleContentText,
    handlePaste: handlePasteText,
    setContent: setContentText,
  } = useEditableContent(' ');

  const onUploadDate = async () => {
    const data = {
      title: contentTitle,
      author: contentAuthor,
      quotes: contentText,
      file: await getUploadedImageToBase64(uploadedImage),
    };

    const formData = createFormData(data);
    updateGeoProd(formData);
  };

  useEffect(() => {
    if (data) {
      setContentTitle(data?.data?.title);
      setContentText(data?.data?.quotes);
      setContentAuthor(data?.data?.author);
      setImageBase64(data?.data?.file || null);
    }
  }, [data, setContentAuthor, setContentText, setContentTitle]);

  return (
    <StyledMapOfKazakhstan>
      <Container maxWidth='md'>
        <div className='map__content'>
          <TitleEdit>Заголовок:</TitleEdit>
          <Typography
            className='text__title border-bottom'
            variant='h3'
            marginBottom='20px'
            contentEditable={true}
            onBlur={handleContentTitle}
            onPaste={handlePasteTitle}
            ref={contentRefTitle}
            dangerouslySetInnerHTML={{ __html: contentTitle }}
          />
          <div className='map__image'>
            <EditImage
              setUploadedImage={setUploadedImage}
              urlImag={imageBase64}
            />

            <UploadButton
              text='Сохранить'
              onClick={onUploadDate}
              icon={<PlusFile />}
              disabled={isLoading}
            />
          </div>
          <div className='map__text'>
            <TitleEdit>Основной текст:</TitleEdit>
            <Typography
              className='text__quote border-bottom'
              contentEditable={true}
              onBlur={handleContentText}
              onPaste={handlePasteText}
              ref={contentRefText}
              dangerouslySetInnerHTML={{ __html: contentText }}
            />
            <TitleEdit>Автор:</TitleEdit>
            <Typography
              className='text__author border-bottom'
              contentEditable={true}
              onBlur={handleContentAuthor}
              onPaste={handlePasteAuthor}
              ref={contentRefAuthor}
              dangerouslySetInnerHTML={{ __html: contentAuthor }}
            />
          </div>
        </div>
      </Container>
    </StyledMapOfKazakhstan>
  );
};

export default MapOfKazakhstan;
