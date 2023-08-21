import { useState } from 'react';
import { Box, styled } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
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
import { CreateBodyFields } from '../../../../../rtk-query/types/fields-types.ts';

const schema = yup.object().shape({
  title: yup.string().required('Заголовок обязателен'),
  objectId: yup.string().required('ID объекта обязателен'),
  projectPassword: yup
    .string()
    .length(6, 'Пароль должен содержать ровно 6 символов')
    .required('Пароль обязателен'),
  price: yup
    .number()
    .typeError('Цена должна быть числом')
    .required('Цена обязательна'),
  mapLink: yup
    .string()
    .url('Введите действующую URL ссылку')
    .required('Ссылка обязательна'),
});

type FormData = {
  title: string;
  objectId: string;
  projectPassword: string;
  price: number;
  mapLink: string;
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

const CreateResourceCardForm = () => {
  const [addFields] = useAddFieldsMutation();
  const [moreImages, setImages] = useState<TImageGallery[]>([]);
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [uploadedImage, setUploadedImage] = useState<
    string | ArrayBuffer | null
  >(null);
  const [urlPdf, setUploadedPdf] = useState<string | ArrayBuffer | null>(null);
  const [resourceData, setResourceData] =
    useState<Resource[]>(initialResources);

  const onSubmit = (data: FormData) => {
    const body: CreateBodyFields = {
      backgroundImageFiles: uploadedImage,
      images: moreImages,
      location: data.mapLink,
      mainFile: urlPdf,
      resources: resourceData.map((resource) => resource.name).join(),
    };
    addFields(body);

    // console.log('moreImages', moreImages);
    // console.log(
    //   'resourceData',
    //   resourceData.map((resource) => resource.name),
    // );
    // console.log('uploadedImage', uploadedImage);
    // console.log('urlPdf', urlPdf);
    // console.log(data);
  };

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
      <TitleEdit>ID объекта:</TitleEdit>
      <Controller
        name='objectId'
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
