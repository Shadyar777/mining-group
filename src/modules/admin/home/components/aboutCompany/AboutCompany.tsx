import { MouseEvent } from 'react';
import { Container, Typography } from '@mui/material';
import LanguageSwitcher from '../../../../common/buttons/LanguageSwitcher.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import { StyledAboutCompany } from './styled.ts';
import TitleEdit from '../../../common/TitleEdit.tsx';
import { useEditableContent } from '../../../../../hooks/useEditableContent.ts';

const maskText = `Казахстанская компания, основанная в 2020 году. На данный момент
    компания уже имеет несколько действующих рудников, а также ряд
    месторождений на стадии геологоразведки.
    <br />
    <br />
    Мы продолжаем вкладывать в каждый из наших проектов на территории
    Республики Казахстан. К 2024 году все рудники INVEST MINING GROUPE
    будут работать на полную мощность`;

const AboutCompany = () => {
  const {
    content: contentTitle,
    ref: contentRefTitle,
    handleBlur: handleContentTitle,
  } = useEditableContent(`ТОО «INVEST MINING GROUP» 22`);
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
    console.log('onUploadDate');
  };

  return (
    <StyledAboutCompany>
      <Container maxWidth='md'>
        <div className='about-company__content'>
          <LanguageSwitcher onClick={onSwitchLaunch} />
          <TitleEdit>Загаловок:</TitleEdit>
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
            <img
              alt=''
              src='../../../../../../public/mock-images/about-company.png'
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
