import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import { StyledAboutCompany } from './styled.ts';
import TitleEdit from '../../../common/TitleEdit.tsx';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';
import EditImage from '../../../common/EditImage.tsx';
import {
  useGetAllHomeQuery,
  useUpdateHomeMutation,
} from '../../../../../rtk-query';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import { createFormData } from '../../../../../utils';
import LoadingSpinner from '../../../../common/loadingSpinner';
import { getUploadedImageToBase64 } from '../../../../../utils/getUploadedImageToBase64.ts';

const AboutCompany = () => {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const [image, setImage] = useState<string | null>('');

  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading: isGetLoading } = useGetAllHomeQuery(lng);
  const [updateAboutHome, { isLoading: isUpdateLoading }] =
    useUpdateHomeMutation();

  const {
    content: contentTitle,
    ref: contentRefTitle,
    handleBlur: handleContentTitle,
    handlePaste: handlePasteHeadings,
    setContent: setContentTitle,
  } = useEditableContent(``);
  const {
    content: contentText,
    ref: contentRefText,
    handleBlur: handleContentText,
    handlePaste: handlePasteText,
    setContent: setContentText,
  } = useEditableContent('');

  const onUploadDate = async () => {
    const data = {
      title: contentTitle,
      text: contentText,
      file: await getUploadedImageToBase64(uploadedImage),
    };
    const formData = createFormData(data);
    updateAboutHome(formData);
  };

  useEffect(() => {
    if (data) {
      setContentTitle(data?.data?.title || '');
      setContentText(data?.data?.text || '');
      setImage(data.data?.file || null);
    }
  }, [data, setContentText, setContentTitle]);

  if (isGetLoading || isUpdateLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StyledAboutCompany>
      <Container maxWidth='md'>
        <div className='about-company__content'>
          <TitleEdit>Заголовок:</TitleEdit>
          <Typography
            variant='h3'
            className='content__title'
            contentEditable={true}
            onBlur={handleContentTitle}
            onPaste={handlePasteHeadings}
            ref={contentRefTitle}
            dangerouslySetInnerHTML={{ __html: contentTitle }}
          />
          <TitleEdit>Основной текст:</TitleEdit>
          <div
            className='content__text'
            contentEditable={true}
            onBlur={handleContentText}
            onPaste={handlePasteText}
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
    </StyledAboutCompany>
  );
};

export default AboutCompany;
