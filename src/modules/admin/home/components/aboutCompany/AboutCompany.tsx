import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import LanguageSwitcher from '../../../../common/buttons/LanguageSwitcher.tsx';
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
import {
  base64ToFile,
  createFormData,
  parseImgBase64,
} from '../../../../../utils';

const AboutCompany = () => {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const [imageBase64, setImageBase64] = useState<string | null>('');

  const lng = useAppSelector(getAddGlobalLanguages);
  const { data } = useGetAllHomeQuery(lng);
  const [updateAboutHome] = useUpdateHomeMutation();

  const {
    content: contentTitle,
    ref: contentRefTitle,
    handleBlur: handleContentTitle,
    handlePaste: handlePasteHeadings,
    setContent: setContentTitle,
  } = useEditableContent(`ТОО «INVEST MINING GROUP» 22`);
  const {
    content: contentText,
    ref: contentRefText,
    handleBlur: handleContentText,
    handlePaste: handlePasteText,
    setContent: setContentText,
  } = useEditableContent('');

  const onSwitchLaunch = (language: string) => {
    console.log(language);
  };

  const onUploadDate = async () => {
    const data = {
      title: contentTitle,
      text: contentText,
      file: uploadedImage
        ? await base64ToFile(uploadedImage as string, 'about')
        : null,
    };
    const formData = createFormData(data);
    updateAboutHome(formData);
  };

  useEffect(() => {
    if (data) {
      const parsedIconBase64 = data?.data
        ? parseImgBase64({
            data: data.data.file.data || '',
            type: data.data.file.type || '',
          })
        : null;
      setContentTitle(data?.data?.title || '');
      setContentText(data?.data?.text || '');
      setImageBase64(parsedIconBase64 || null);
    }
  }, [data, setContentText, setContentTitle]);

  return (
    <StyledAboutCompany>
      <Container maxWidth='md'>
        <div className='about-company__content'>
          <LanguageSwitcher onClick={onSwitchLaunch} />
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
            <EditImage
              setUploadedImage={setUploadedImage}
              urlImag={imageBase64}
            />
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
