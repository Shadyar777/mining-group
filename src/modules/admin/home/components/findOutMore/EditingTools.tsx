import { useEffect, useState } from 'react';
import { styled, Typography } from '@mui/material';
import TitleEdit from '../../../common/TitleEdit.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import EditImage from './EditImage.tsx';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';
import { useUpdateTitleMutation } from '../../../../../rtk-query';
import { createFormData } from '../../../../../utils';
import { getUploadedImageToBase64 } from '../../../../../utils/getUploadedImageToBase64.ts';

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

type EditingToolsProps = {
  id: string | number;
  title: string;
  text: string;
  file?: string;
  onCloseEditModal: () => void;
};
const EditingTools = ({
  id,
  title,
  text,
  file,
  onCloseEditModal,
}: EditingToolsProps) => {
  const [updateTitle, { isSuccess: isSuccessUpdateTitle }] =
    useUpdateTitleMutation();

  const {
    content: contentHeadings,
    ref: contentHeadingsRef,
    handleBlur: handleContentHeadings,
  } = useEditableContent(title);
  const {
    content: contentShortDescription,
    ref: contentShortDescriptionRef,
    handleBlur: handleContentShortDescription,
  } = useEditableContent(text);
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const onUploadDate = async () => {
    if (id) {
      const data = {
        id: id,
        title: contentHeadings,
        text: contentShortDescription,
        file: await getUploadedImageToBase64(uploadedImage),
      };
      const formData = createFormData(data);
      updateTitle(formData);
    }
  };

  useEffect(() => {
    if (isSuccessUpdateTitle) {
      onCloseEditModal();
    }
  }, [isSuccessUpdateTitle, onCloseEditModal]);

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
      <EditImage setUploadedImage={setUploadedImage} urlImag={file || null} />
      <UploadButton
        text='Сохранить'
        onClick={onUploadDate}
        icon={<PlusFile />}
      />
    </StyledEditingTools>
  );
};

export default EditingTools;
