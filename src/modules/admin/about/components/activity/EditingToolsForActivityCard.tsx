import { Dispatch, SetStateAction, useEffect } from 'react';
import { styled, Typography } from '@mui/material';
import TitleEdit from '../../../common/TitleEdit.tsx';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import {
  useAddActivitiesMutation,
  useUpdateActivitiesMutation,
} from '../../../../../rtk-query';

const StyledEditingToolsForActivityCard = styled('div')(() => ({
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
    borderBottom: '1px solid #F28A2E',
  },
  '& .upload-button': {
    width: '50%',
    alignSelf: 'center',
  },
}));

type EditingToolsForActivityCardProps = {
  content: {
    id?: string;
    title: string;
    text: string;
  };
  setOpenEditModal: Dispatch<SetStateAction<boolean>>;
};

const EditingToolsForActivityCard = ({
  content,
  setOpenEditModal,
}: EditingToolsForActivityCardProps) => {
  const [addActivities, { isSuccess: isSuccessAddActivities }] =
    useAddActivitiesMutation();
  const [updateActivities, { isSuccess: isSuccessUpdateActivities }] =
    useUpdateActivitiesMutation();
  const {
    content: contentHeadings,
    ref: contentHeadingsRef,
    handleBlur: handleContentHeadings,
    handlePaste: handlePasteContentHeadings,
  } = useEditableContent(content.title);

  const {
    content: contentShortDescription,
    ref: contentShortDescriptionRef,
    handleBlur: handleContentShortDescription,
    handlePaste: handlePasteShortDescription,
  } = useEditableContent(content.text);

  const onUploadDate = () => {
    if (content.id) {
      updateActivities({
        id: content.id,
        title: contentHeadings,
        text: contentShortDescription,
      });
    } else {
      addActivities({
        title: contentHeadings,
        text: contentShortDescription,
      });
    }
  };

  useEffect(() => {
    if (isSuccessAddActivities || isSuccessUpdateActivities) {
      setOpenEditModal(false);
    }
  }, [isSuccessAddActivities, isSuccessUpdateActivities, setOpenEditModal]);

  return (
    <StyledEditingToolsForActivityCard>
      <TitleEdit>Заголовок:</TitleEdit>
      <Typography
        variant='h3'
        className='edit__title'
        contentEditable={true}
        onBlur={handleContentHeadings}
        onPaste={handlePasteContentHeadings}
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

      <UploadButton
        text='Сохранить'
        onClick={onUploadDate}
        icon={<PlusFile />}
      />
    </StyledEditingToolsForActivityCard>
  );
};

export default EditingToolsForActivityCard;
