import { useState } from 'react';
import TitleEdit from '../../../common/TitleEdit.tsx';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';
import { styled, Typography } from '@mui/material';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import EditIcon from './EditIcon.tsx';

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
    title: string;
    text: string;
    icon: string | null;
  };
};
const EditingToolsForOurValuesCard = ({
  content,
}: EditingToolsForOurValuesCardProps) => {
  const {
    content: contentHeadings,
    ref: contentHeadingsRef,
    handleBlur: handleContentHeadings,
  } = useEditableContent(content.title);
  const {
    content: contentShortDescription,
    ref: contentShortDescriptionRef,
    handleBlur: handleContentShortDescription,
  } = useEditableContent(content.text);
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const onUploadDate = () => {
    console.log(contentHeadings, contentShortDescription, uploadedImage);
  };
  return (
    <StyledEditingToolsForOurValuesCard>
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
