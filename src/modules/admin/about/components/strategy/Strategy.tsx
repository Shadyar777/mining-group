import { useEffect, useState } from 'react';
import { Container, styled, Typography } from '@mui/material';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import TitleEdit from '../../../common/TitleEdit.tsx';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';
import EditImage from '../../../common/EditImage.tsx';
import {
  useAddStrategyMutation,
  useGetStrategyQuery,
} from '../../../../../rtk-query';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { base64ToFile } from '../../../../../utils';
import LoadingSpinner from '../../../../common/loadingSpinner';

export const StyledStrategy = styled('div')(({ theme: { breakpoints } }) => ({
  width: '100%',

  '& .strategy__content': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem 0',
    padding: '32px 40px',
    background: 'white',

    borderRadius: '20px',
    border: '1px solid #F28A2E',

    '& .content__title': {
      color: '#004B8F',
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    '& .content__text': {
      color: '#1E1E1E',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '300',
      lineHeight: 'normal',
    },
    '& .content__img': {
      margin: '32px 0',
      img: {
        width: '100%',
      },
    },

    '& .upload-button': {
      width: '200px',
      alignSelf: 'center',
    },

    [breakpoints.down('mobileSm')]: {
      border: 'unset',
      padding: '24px 0 0 0',
      '& .content__title': {
        fontSize: '20px',
      },
      '& .content__text': {
        fontSize: '12px',
      },
    },
  },
}));

const Strategy = () => {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const [image, setImage] = useState<string | null>('');

  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading: isGetLoading } = useGetStrategyQuery(lng);
  const [addStrategy, { isLoading: isAddLoading }] = useAddStrategyMutation();

  const {
    content: contentTitle,
    ref: contentRefTitle,
    handleBlur: handleContentTitle,
    setContent: setContentTitle,
  } = useEditableContent('');

  const {
    content: contentText,
    ref: contentRefText,
    handleBlur: handleContentText,
    setContent: setContentText,
  } = useEditableContent(data?.data?.text ?? '');

  const onUploadDate = async () => {
    const formData = new FormData();
    const file = uploadedImage
      ? await base64ToFile({
          dataURI: uploadedImage as string,
          fileName: 'images',
          optionsType: 'image/jpeg',
        })
      : null;
    formData.append('title', contentTitle);
    formData.append('text', contentText);
    formData.append('file', file || '');
    addStrategy(formData);
  };

  useEffect(() => {
    if (data) {
      setContentTitle(data?.data?.title || '');
      setContentText(data?.data?.text || '');
      setImage(data?.data?.file);
    }
  }, [data, setContentText, setContentTitle]);

  if (isGetLoading || isAddLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StyledStrategy>
      <Container maxWidth='md'>
        <div className='strategy__content'>
          {/*<LanguageSwitcher onClick={onSwitchLaunch} />*/}
          <TitleEdit>Заголовок:</TitleEdit>
          <Typography
            variant='h3'
            className='content__title'
            contentEditable={true}
            onBlur={handleContentTitle}
            ref={contentRefTitle}
            dangerouslySetInnerHTML={{ __html: contentTitle }}
          />
          <TitleEdit>Основной текст:</TitleEdit>
          <div
            className='content__text'
            contentEditable={true}
            onBlur={handleContentText}
            ref={contentRefText}
            dangerouslySetInnerHTML={{ __html: contentText }}
          />
          <div className='content__img'>
            <EditImage setUploadedImage={setUploadedImage} urlImag={image} />
          </div>
          <UploadButton
            text='Сохранить'
            onClick={onUploadDate}
            icon={<PlusFile />}
          />
        </div>
      </Container>
    </StyledStrategy>
  );
};

export default Strategy;
