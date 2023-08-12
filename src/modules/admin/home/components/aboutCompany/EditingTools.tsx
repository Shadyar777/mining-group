import { useState } from 'react';
import { styled, Typography } from '@mui/material';
import TitleEdit from '../../../common/TitleEdit.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import EditImage from './EditImage.tsx';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';

const StyledEditingTools = styled('div')(({ theme: { shape } }) => ({
  color: '#6A6A6A',
  fontSize: '16px',
  fontWeight: 400,

  display: 'flex',
  flexDirection: 'column',

  gap: '16px 0',

  '& .edit__title': {
    color: '#333',
    fontSize: '32px',
    fontWeight: 700,

    padding: '4px',
    borderBottom: '1px solid #F28A2E',
  },
  '& .edit__text': {
    color: '#1E1E1E',
    fontSize: '26px',
    fontWeight: 300,

    padding: '4px',
    borderBottom: '1px solid #F28A2E',
  },
  '& .edit__img': {
    width: '100%',
    borderRadius: shape.borderRadius,
    overflow: 'hidden',

    img: {
      width: '100%',
      height: '100%',
    },
  },
  '& .upload-button': {
    width: '50%',
    alignSelf: 'center',
  },
}));
const EditingTools = () => {
  const {
    content: contentHeadings,
    ref: contentHeadingsRef,
    handleBlur: handleContentHeadings,
  } = useEditableContent(`Вакансии`);
  const {
    content: contentShortDescription,
    ref: contentShortDescriptionRef,
    handleBlur: handleContentShortDescription,
  } = useEditableContent(`Виды деятельности. Стратегия`);
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const onUploadDate = () => {
    console.log(contentHeadings, contentShortDescription, uploadedImage);
  };
  return (
    <StyledEditingTools>
      <TitleEdit>Заголовок:</TitleEdit>

      <Typography
        variant='h3'
        className='edit__title'
        contentEditable={true}
        onBlur={handleContentHeadings}
        ref={contentHeadingsRef}
        dangerouslySetInnerHTML={{ __html: contentHeadings }}
      />
      <TitleEdit>Краткое описание:</TitleEdit>
      <div
        className='edit__text'
        contentEditable={true}
        onBlur={handleContentShortDescription}
        ref={contentShortDescriptionRef}
        dangerouslySetInnerHTML={{ __html: contentShortDescription }}
      />
      <TitleEdit>Фоновое изображение:</TitleEdit>
      <EditImage
        setUploadedImage={setUploadedImage}
        urlImag='../../../../../../public/images/home-top-banner.jpg'
      />
      <UploadButton
        text='Сохранить'
        onClick={onUploadDate}
        icon={<PlusFile />}
      />
    </StyledEditingTools>
  );
};

export default EditingTools;
