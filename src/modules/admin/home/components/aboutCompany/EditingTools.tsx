import { styled } from '@mui/material';
import TitleEdit from '../../../common/TitleEdit.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import PlusFile from '../../../../../svgs/PlusFile.tsx';

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
  },
  '& .edit__text': {
    color: '#1E1E1E',
    fontSize: '26px',
    fontWeight: 300,
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
  const onUploadDate = () => {
    console.log('EditingTools');
  };
  return (
    <StyledEditingTools>
      <TitleEdit>Заголовок:</TitleEdit>
      <div className='edit__title'>Вакансии</div>
      <TitleEdit>Краткое описание:</TitleEdit>
      <div className='edit__text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
        dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
        consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur
        adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
      {/*<TextField*/}
      {/*  label=''*/}
      {/*  variant='standard'*/}
      {/*  value='Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum*/}
      {/*  dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,*/}
      {/*  consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur*/}
      {/*  adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'*/}
      {/*/>*/}
      <TitleEdit>Фоновое изображение:</TitleEdit>
      <div className='edit__img'>
        <img alt='' src='../../../../../../public/images/home-top-banner.jpg' />
      </div>
      <UploadButton
        text='Сохранить'
        onClick={onUploadDate}
        icon={<PlusFile />}
      />
    </StyledEditingTools>
  );
};

export default EditingTools;
