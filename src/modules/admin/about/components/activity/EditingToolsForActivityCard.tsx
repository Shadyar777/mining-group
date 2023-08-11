import { styled, Typography } from '@mui/material';
import TitleEdit from '../../../common/TitleEdit.tsx';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';

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

const EditingToolsForActivityCard = () => {
  const {
    content: contentHeadings,
    ref: contentHeadingsRef,
    handleBlur: handleContentHeadings,
  } = useEditableContent(`Развитие активов:`);
  const {
    content: contentShortDescription,
    ref: contentShortDescriptionRef,
    handleBlur: handleContentShortDescription,
  } = useEditableContent(
    `Проведение технического аудита Оценка запасов по стандарту JORC. Разработка стратегии дальнейшего развития. Разработка проектной документации по международным стандартам. Управление проектами.`,
  );

  const onUploadDate = () => {
    console.log(contentHeadings, contentShortDescription);
  };
  return (
    <StyledEditingToolsForActivityCard>
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

      <UploadButton
        text='Сохранить'
        onClick={onUploadDate}
        icon={<PlusFile />}
      />
    </StyledEditingToolsForActivityCard>
  );
};

export default EditingToolsForActivityCard;
