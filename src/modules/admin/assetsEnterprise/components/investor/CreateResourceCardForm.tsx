import { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomInput from './EditCustomInput.tsx';
import TitleEdit from '../../../common/TitleEdit.tsx';
import ImageGallery, {
  Image as TImageGallery,
} from './viewImages/ImageGallery.tsx';
import PlusFile from '../../../../../svgs/PlusFile.tsx';
import UploadButton from '../../../../common/buttons/UploadButton.tsx';
import { Resource, ResourceList } from './resource/ResourceList.tsx';
import { getListIconResources } from '../../../../common/utls/getListIconResources.tsx';
import EditImage from '../../../common/EditImage.tsx';
import EditPDF from './EditPDF.tsx';
import { useAddFieldsMutation } from '../../../../../rtk-query';
import { base64ToFile } from '../../../../../utils';
import { resourceSchema } from '../../utils/resourceSchema.ts';
import { getCheckedNames } from '../../../../../utils/getCheckedNames.ts';
import LoadingSpinner from '../../../../common/loadingSpinner';

export type FormData = {
  title: string;
  projectPassword: string;
  price?: string;
  mapLink?: string;
};

const initialResources = getListIconResources().map((resource) => ({
  ...resource,
  isChecked: false,
}));

const StyledForm = styled('form')(({ theme: { shape } }) => ({
  display: 'flex',
  flexDirection: 'column',
  '& .content__img': {
    margin: '14px 0',
    borderRadius: shape.borderRadius,
    overflow: 'hidden',
    img: {
      width: '100%',
    },
  },
  '& .upload-button': {
    marginTop: '14px',
  },
}));

type CreateResourceCardForm = {
  handleClose: () => void;
};

const CreateResourceCardForm = ({ handleClose }: CreateResourceCardForm) => {
  const [addFields, { isSuccess, isLoading }] = useAddFieldsMutation();
  const [moreImages, setImages] = useState<TImageGallery[]>([]);
  // FIXME: FormData
  const { control, handleSubmit } = useForm<FormData | any>({
    resolver: yupResolver(resourceSchema),
    defaultValues: {
      title: '',
      price: '',
      projectPassword: '',
      mapLink: '',
    },
  });
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const [urlPdf, setUploadedPdf] = useState<string | ArrayBuffer | null>(null);
  const [resourceData, setResourceData] =
    useState<Resource[]>(initialResources);

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    moreImages.forEach((item) => {
      if (item?.src && item?.file) {
        formData.append(`images`, item?.file);
      }
    });
    typeof uploadedImage === 'string' &&
      formData.append(
        'backgroundImageFiles',
        await base64ToFile({
          fileName: 'background-image',
          optionsType: 'image/jpeg',
          dataURI: uploadedImage as string,
        }),
      );
    formData.append('location', data?.mapLink || '');
    if (typeof urlPdf === 'string' && urlPdf) {
      formData.append(
        'mainFile',
        await base64ToFile({
          fileName: 'pdf-file',
          optionsType: 'application/pdf',
          dataURI: urlPdf as string,
        }),
      );
    }
    formData.append('password', data.projectPassword);
    formData.append('price', String(data.price));
    formData.append('resources', getCheckedNames(resourceData).join());
    formData.append('title', data.title);
    addFields(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [handleClose, isSuccess]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TitleEdit>Заголовок:</TitleEdit>
      <Controller
        name='title'
        control={control}
        render={({ field, fieldState }) => (
          <CustomInput
            {...field}
            placeholder=''
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
      />

      <TitleEdit>Пароль к проекту:</TitleEdit>
      <Controller
        name='projectPassword'
        control={control}
        render={({ field, fieldState }) => (
          <CustomInput
            {...field}
            placeholder=''
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
      />

      <TitleEdit>Цена:</TitleEdit>
      <Controller
        name='price'
        control={control}
        render={({ field, fieldState }) => (
          <CustomInput
            {...field}
            placeholder=''
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
      />
      <TitleEdit>Ресурсы:</TitleEdit>
      <ResourceList
        resources={resourceData}
        onResourceChange={setResourceData}
      />
      <TitleEdit>Фоновое изображение:</TitleEdit>
      <div className='content__img'>
        <EditImage
          setUploadedImage={setUploadedImage}
          urlImag={uploadedImage}
        />
      </div>

      <TitleEdit>Загрузить файл:</TitleEdit>
      <div className='content__img'>
        <EditPDF setUploadedPdf={setUploadedPdf} urlPdf={urlPdf} />
      </div>

      <TitleEdit>Загрузить дополнительные изображения:</TitleEdit>
      <Box m={2} margin='14px 0 14px 0'>
        <ImageGallery onChange={setImages} initialImages={[]} />
      </Box>

      <TitleEdit>Ссылка локации на карте:</TitleEdit>
      <Controller
        name='mapLink'
        control={control}
        render={({ field, fieldState }) => (
          <CustomInput
            {...field}
            placeholder=''
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
      />

      <UploadButton text='Сохранить' type='submit' icon={<PlusFile />} />
    </StyledForm>
  );
};

export default CreateResourceCardForm;
