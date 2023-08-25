import { useEffect, useState } from 'react';
import TitleEdit from '../../../common/TitleEdit.tsx';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';
import { styled, Typography } from '@mui/material';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import EditIcon from './EditIcon.tsx';
import {
  useAddValuesMutation,
  useUpdateValuesMutation,
} from '../../../../../rtk-query';
import { base64ToFile } from '../../../../../utils';
import { createFormData } from '../../../../../utils';
import LoadingSpinner from '../../../../common/loadingSpinner';

const StyledEditingToolsForOurValuesCard = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',

  gap: '16px 0',
  marginTop: '16px',

  '& .edit__title': {
    color: '#F28A2E',
    fontSize: '24px',
    fontWeight: 600,

    padding: '4px',
    borderBottom: '1px solid #F28A2E',
  },
  '& .edit__text': {
    color: '#000',
    fontSize: '20px',
    fontWeight: 300,
  },
  '& .upload-button': {
    width: '50%',
    alignSelf: 'center',
  },
}));
type EditingToolsForOurValuesCardProps = {
  content: {
    id?: string;
    title: string;
    text: string;
    icon: string | null;
  };
  onCloseEditModal: () => void;
};
const EditingToolsForOurValuesCard = ({
  content,
  onCloseEditModal,
}: EditingToolsForOurValuesCardProps) => {
  const {
    content: contentHeadings,
    ref: contentHeadingsRef,
    handleBlur: handleContentHeadings,
    handlePaste: handlePasteHeadings,
  } = useEditableContent(content.title);
  const {
    content: contentShortDescription,
    ref: contentShortDescriptionRef,
    handleBlur: handleContentShortDescription,
    handlePaste: handlePasteShortDescription,
  } = useEditableContent(content.text);
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const [updateValues, { isSuccess: isSuccessUpdateValues, isLoading }] =
    useUpdateValuesMutation();
  const [addValues, { isSuccess: isSuccessAddValues }] = useAddValuesMutation();

  const onUploadDate = async () => {
    if (content.id) {
      const data = {
        id: content.id,
        title: contentHeadings,
        text: contentShortDescription,
        file: uploadedImage
          ? await base64ToFile({
              dataURI: uploadedImage as string,
              fileName: 'icon',
              optionsType: 'image/jpeg',
            })
          : null,
      };
      const formData = createFormData(data);
      updateValues(formData);
      return;
    }
    const data = {
      title: contentHeadings,
      text: contentShortDescription,
      file: uploadedImage
        ? await base64ToFile({
            dataURI: uploadedImage as string,
            fileName: 'icon',
            optionsType: 'image/jpeg',
          })
        : null,
    };

    const formData = createFormData(data);
    addValues(formData);
    return;
  };

  useEffect(() => {
    if (isSuccessAddValues || isSuccessUpdateValues) {
      onCloseEditModal();
    }
  }, [isSuccessAddValues, isSuccessUpdateValues, onCloseEditModal]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StyledEditingToolsForOurValuesCard>
      <TitleEdit>Заголовок:</TitleEdit>
      <Typography
        variant='h3'
        className='edit__title'
        contentEditable={true}
        onBlur={handleContentHeadings}
        onPaste={handlePasteHeadings}
        ref={contentHeadingsRef}
        dangerouslySetInnerHTML={{ __html: contentHeadings }}
      />
      <TitleEdit>Краткое описание:</TitleEdit>
      <div
        className='edit__text'
        contentEditable={true}
        onBlur={handleContentShortDescription}
        onPaste={handlePasteShortDescription}
        ref={contentShortDescriptionRef}
        dangerouslySetInnerHTML={{ __html: contentShortDescription }}
      />
      <EditIcon
        setUploadedImage={setUploadedImage}
        initialImage={content.icon}
      />
      <UploadButton
        text='Сохранить'
        onClick={onUploadDate}
        icon={<PlusFile />}
      />
    </StyledEditingToolsForOurValuesCard>
  );
};

export default EditingToolsForOurValuesCard;
