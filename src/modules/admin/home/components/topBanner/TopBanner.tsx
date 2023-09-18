import { ChangeEvent, useEffect, useState } from 'react';
import { styled } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import UploadImage from '../../../../common/buttons/UploadImage.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import ContentBanner from './ContentBanner.tsx';
import {
  useGetBackgroundQuery,
  useUpdateHomeBackgroundMutation,
} from '../../../../../rtk-query';
import {
  base64ToFile,
  createFormData,
  fileToBase64,
} from '../../../../../utils';

export const StyledTopBanner = styled('div')(({ theme: { breakpoints } }) => ({
  width: '100%',
  position: 'relative',
  marginTop: '-160px',

  gridArea: 'TopBanner',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& .upload-button': {
    marginTop: '48px',
  },

  [breakpoints.down('mobileSm')]: {
    display: 'none',
    height: '100px',
  },
}));

type backgroundFileUrl = {
  type: string;
  file: string;
  name: string;
};

const TopBanner = () => {
  const [backgroundFileUrl, setBackgroundFileUrl] =
    useState<backgroundFileUrl | null>(null);
  const [fileForReport, setFileForReport] = useState<string | null>(null);

  const [updateBgImage, { isLoading }] = useUpdateHomeBackgroundMutation();

  const lng = useAppSelector(getAddGlobalLanguages);
  const { data } = useGetBackgroundQuery(lng);
  const onUploadImage = async () => {
    const convertedFileToBase64 = backgroundFileUrl
      ? await base64ToFile({
          dataURI: fileForReport as string,
          optionsType: backgroundFileUrl.type as any,
          fileName: backgroundFileUrl?.name,
        })
      : null;
    const data = {
      video: backgroundFileUrl?.type.includes('video')
        ? convertedFileToBase64
        : null,
      image: backgroundFileUrl?.type.includes('image')
        ? convertedFileToBase64
        : null,
    };
    const FormData = createFormData(data);
    await updateBgImage(FormData)
      .then((result: any) => {
        if (result?.data.message === 'Success') {
          setTimeout(() => setBackgroundFileUrl(null), 500);
        }
      })
      .catch((error) => {
        console.warn('error', error);
      });

    if (backgroundFileUrl) {
      URL.revokeObjectURL(backgroundFileUrl.file);
      setBackgroundFileUrl(null);
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const base64String = await fileToBase64(file);
      if (base64String) {
        setFileForReport(base64String);
        const url = URL.createObjectURL(file);
        setBackgroundFileUrl({ file: url, type: file.type, name: file.name });
      }
    }
  };

  const onDeleteImage = () => {
    if (backgroundFileUrl) {
      URL.revokeObjectURL(backgroundFileUrl.file);
      setBackgroundFileUrl(null);
    }
  };

  useEffect(() => {
    return () => {
      if (backgroundFileUrl) {
        URL.revokeObjectURL(backgroundFileUrl.file);
      }
    };
  }, [backgroundFileUrl]);

  const getFile = (file: backgroundFileUrl | null) => {
    if (file?.type?.includes('video')) {
      return {
        newVideoSrc: file.file,
      };
    }
    if (file?.type?.includes('image')) {
      return {
        imageSrc: file.file,
      };
    }
    if (data?.data?.video) {
      return {
        oldVideoSrc: data.data.video,
      };
    }
    if (data?.data?.image) {
      return {
        imageSrc: data.data.image,
      };
    }
  };

  return (
    <StyledTopBanner>
      <ContentBanner {...getFile(backgroundFileUrl)} />
      {backgroundFileUrl ? (
        <>
          <Box display='flex' gap='0 10px'>
            <UploadButton
              text='Удалить'
              onClick={onDeleteImage}
              icon={<DeleteIcon />}
            />
            <UploadButton
              text='Загрузить'
              onClick={onUploadImage}
              icon={<CloudUploadIcon />}
              disabled={isLoading}
            />
          </Box>
        </>
      ) : (
        <UploadImage
          text='Загрузить картинку'
          icon={<AddPhotoAlternateOutlinedIcon />}
          handleFileChange={handleFileChange}
          accept='video/*, image/*'
        />
      )}
    </StyledTopBanner>
  );
};

export default TopBanner;
