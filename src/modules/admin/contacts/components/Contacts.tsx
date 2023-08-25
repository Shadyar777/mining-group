import { Container, styled, Typography } from '@mui/material';
import GoogleMaps from './GoogleMaps.tsx';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { useEditableContent } from '../../../../hooks/useEditableContent.ts';
import TitleEdit from '../../common/TitleEdit.tsx';
import MapInput from './MapInput.tsx';
import {
  useGetContactsQuery,
  useUpdateContactsMutation,
} from '../../../../rtk-query';
import { useAppSelector } from '../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../common/sliceCommon/slice.ts';
import { useEffect, useState } from 'react';
import UploadButton from '../../../common/buttons/UploadButton.tsx';
import PlusFile from '../../../../svgs/PlusFile.tsx';

const StyledContacts = styled('div')(({ theme: { breakpoints } }) => ({
  padding: '40px 0 0 0',
  color: '#392C0B',
  '& .contacts__container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '64px',
    '& .contacts__title': {
      textAlign: 'center',
    },
    '& .contacts__content': {
      display: 'flex',
      gap: '0 64px',
    },
    '& .contacts__maps': {
      display: 'flex',
      flexDirection: 'column',
    },
    '& .content__text': {
      flex: '1 1 300px',
      color: '#392C0B',
      gap: '31px 0',
      fontSize: '26px',
      fontWeight: 400,
      display: 'flex',
      flexDirection: 'column',
      '& .text__location': {},
      '& .text__mail': {},
      '& .contact-link': {
        display: 'flex',
        alignItems: 'center',
        gap: '0 16px',
        fontSize: '26px',

        div: {
          color: '#392C0B',
          fontSize: '26px',
          fontWeight: 400,
          textDecoration: 'none',
        },
      },
    },
  },

  '& .upload-button': {
    width: '250px',
    alignSelf: 'center',
  },

  [breakpoints.down('sm')]: {},
  [breakpoints.down('mobileSm')]: {
    padding: '32px 0',
    '& .contacts__container': {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      '& .contacts__title': {
        fontSize: '24px',
        fontWeight: 600,
      },
      '& .contacts__content': {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px 0',
      },
      '& .content__text': {
        gap: '24px 0',
        flex: '1 1 auto',
        color: 'inherit',
        fontSize: '20px',
        fontWeight: 400,
        display: 'flex',
        flexDirection: 'column',
        '& .text__location': {},
        '& .text__mail': {},
        '& .contact-link': {
          display: 'flex',
          alignItems: 'center',
          a: {
            fontSize: '20px',
          },
        },
      },
    },
  },
}));
const Contacts = () => {
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data } = useGetContactsQuery(lng);
  const [updateContacts] = useUpdateContactsMutation();
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const {
    content: contentLocation,
    ref: contentRefTitle,
    handleBlur: handleContentLocation,
    handlePaste: handlePasteLocation,
    setContent: setContentLocation,
  } = useEditableContent('');
  const {
    content: contentTel,
    ref: contentRefTel,
    handleBlur: handleContentTel,
    handlePaste: handlePasteTel,
    setContent: setContentTel,
  } = useEditableContent('');
  const {
    content: contentMail,
    ref: contentRefMail,
    handleBlur: handleContentMail,
    handlePaste: handlePasteMail,
    setContent: setContentMail,
  } = useEditableContent('');

  const onUploadDate = () => {
    if (data) {
      updateContacts({
        location: inputValue || data.data.location,
        mail: contentMail,
        phone: contentTel,
        address: contentLocation,
      });
    }
  };
  useEffect(() => {
    if (data) {
      setContentLocation(data?.data?.address || '');
      setContentTel(data?.data?.phone || '');
      setContentMail(data?.data?.mail || '');
    }
  }, [data, setContentLocation, setContentMail, setContentTel]);

  return (
    <StyledContacts>
      <Container maxWidth='md'>
        <div className='contacts__container'>
          <Typography variant='h2' className='contacts__title'>
            Контакты
          </Typography>
          <div className='contacts__content'>
            <div className='contacts__maps'>
              <TitleEdit>Ссылка на карте:</TitleEdit>
              <MapInput
                inputValue={inputValue}
                isValid={isValid}
                setInputValue={setInputValue}
                setIsValid={setIsValid}
              />
              <GoogleMaps
                srcGoogle={inputValue || data?.data?.location || ''}
              />
            </div>
            <div className='content__text'>
              <TitleEdit>Адрес:</TitleEdit>
              <div
                className='text__location'
                contentEditable={true}
                onBlur={handleContentLocation}
                onPaste={handlePasteLocation}
                ref={contentRefTitle}
                dangerouslySetInnerHTML={{ __html: contentLocation }}
              />
              <div className='text__tel contact-link'>
                <PhoneRoundedIcon />
                <div
                  contentEditable={true}
                  onBlur={handleContentTel}
                  onPaste={handlePasteTel}
                  ref={contentRefTel}
                  dangerouslySetInnerHTML={{ __html: contentTel }}
                ></div>
              </div>
              <div className='text__mail contact-link'>
                <EmailRoundedIcon />
                <div
                  contentEditable={true}
                  onBlur={handleContentMail}
                  onPaste={handlePasteMail}
                  ref={contentRefMail}
                  dangerouslySetInnerHTML={{ __html: contentMail }}
                />
              </div>
            </div>
          </div>
          <UploadButton
            text='Сохранить'
            onClick={onUploadDate}
            icon={<PlusFile />}
          />
        </div>
      </Container>
    </StyledContacts>
  );
};

export default Contacts;
