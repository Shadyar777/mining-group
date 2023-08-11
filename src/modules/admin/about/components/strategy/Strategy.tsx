import { Container, styled, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';
import LanguageSwitcher from '../../../../common/buttons/LanguageSwitcher.tsx';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import TitleEdit from '../../../common/TitleEdit.tsx';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';
import EditImage from '../../../common/EditImage.tsx';

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

const maskText =
  'Основной стратегией развития компании является управление\n' +
  '            горно-рудными проектами на всех стадиях развития: от начальной\n' +
  '            стадии поиска и разведки, технико-экономического обоснования,\n' +
  '            проектирования и строительства, до управления на этапе производства.\n' +
  '            <br />\n' +
  '            <br />\n' +
  '            Дополнительной стратегией развития является сопровождение сделок по\n' +
  '            продажам и слиянию активов.';
const Strategy = () => {
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const {
    content: contentTitle,
    ref: contentRefTitle,
    handleBlur: handleContentTitle,
  } = useEditableContent(`Стратегия`);

  const {
    content: contentText,
    ref: contentRefText,
    handleBlur: handleContentText,
  } = useEditableContent(maskText);
  const onSwitchLaunch = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonText = event.currentTarget.textContent;
    console.log(buttonText);
  };
  const onUploadDate = () => {
    console.log(contentTitle, contentText, uploadedImage);
  };
  return (
    <StyledStrategy>
      <Container maxWidth='md'>
        <div className='strategy__content'>
          <LanguageSwitcher onClick={onSwitchLaunch} />
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
            <EditImage
              setUploadedImage={setUploadedImage}
              urlImag='../../../../../../public/mock-images/about-company.png'
            />
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
