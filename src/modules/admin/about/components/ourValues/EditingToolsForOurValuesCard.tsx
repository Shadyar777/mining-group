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

const EditingToolsForOurValuesCard = () => {
  const {
    content: contentHeadings,
    ref: contentHeadingsRef,
    handleBlur: handleContentHeadings,
  } = useEditableContent(`Экология`);
  const {
    content: contentShortDescription,
    ref: contentShortDescriptionRef,
    handleBlur: handleContentShortDescription,
  } = useEditableContent(
    `Приоритет компании — защита и сохранение экологии. Мы делаем конкретные шаги для минимизация влияния золотодобывающего производства на окружающую среду.`,
  );
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
        initialImage={'../../../../../../public/mock-images/eco.svg'} // TODO - заменить на url
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
