import { useEffect, useMemo, useState } from 'react';
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
import {
  useGetFieldsByIdQuery,
  useUpdateFieldsByIdMutation,
} from '../../../../../rtk-query';
import LoadingSpinner from '../../../../common/loadingSpinner';
import { base64ToFile, parseImgBase64 } from '../../../../../utils';
import { convertBase64ToPdfDataUrl } from '../../../../../utils/convertBase64ToPdfDataUrl.ts';
import { updateCheckboxes } from '../../../../../utils/updateCheckboxes.ts';
import { dataURLtoBlob } from '../../../../../utils/dataURLtoBlob.tsx';
import { getCheckedNames } from '../../../../../utils/getCheckedNames.ts';
import { resourceSchema } from '../../utils/resourceSchema.ts';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';

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

type EditResourceCardFormProps = {
  id: number;
  handleClose: () => void;
};

const EditResourceCardForm = ({
  id,
  handleClose,
}: EditResourceCardFormProps) => {
  const lng = useAppSelector(getAddGlobalLanguages);
  const { data, isLoading: isGetLoading } = useGetFieldsByIdQuery({ id, lng });
  const [
    updateFieldsById,
    { isSuccess: isSuccessUpdateFieldsById, isLoading: isPostLoading },
  ] = useUpdateFieldsByIdMutation();
  const [moreImages, setImages] = useState<TImageGallery[]>([]);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    // setValue
  } = useForm({
    resolver: yupResolver(resourceSchema),
    defaultValues: {
      title: '',
      objectId: '',
      price: 0,
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
    moreImages.forEach((item, index) => {
      if (item.src) {
        const imgBlob = dataURLtoBlob(item.src);
        formData.append('images', imgBlob, `image${index}`);
      }
    });
    typeof uploadedImage === 'string' &&
      formData.append(
        'backgroundImageFiles',
        await base64ToFile(uploadedImage as string, 'backgroundImageFiles'),
      );

    const pdfFile = await base64ToFile((urlPdf || '') as string, 'urlPdf');
    formData.append('mainFile', pdfFile);
    formData.append('location', data.mapLink);
    formData.append('password', data.projectPassword);
    formData.append('price', String(data.price));
    formData.append('resources', getCheckedNames(resourceData).join());
    formData.append('title', data.title);
    formData.append('id', String(id));
    updateFieldsById(formData);
  };

  const srcImagesBase64 = useMemo(() => {
    return (
      data?.data?.images.map((image) => ({
        src: parseImgBase64({
          data: image.data || '',
          type: image.type || '',
        }),
      })) ?? []
    );
  }, [data?.data?.images]);

  useEffect(() => {
    if (data) {
      const convertedDataUrl = data.data?.mainFile?.fieldsId
        ? convertBase64ToPdfDataUrl(data.data?.mainFile?.data || '')
        : null;
      // fieldsId
      const parsedBgImgFiles = data.data.backgroundImageFiles?.fieldsId
        ? parseImgBase64({
            data: data.data.backgroundImageFiles.data || '',
            type: data.data.backgroundImageFiles.type || '',
          })
        : null;
      setResourceData(updateCheckboxes(resourceData, data.data.resources));
      reset({
        title: data.data.title,
        objectId: data.data.id as unknown as string,
        projectPassword: data.data.password,
        price: data.data.price,
        mapLink: data.data.location,
      });
      setTimeout(() => {
        setUploadedImage(() => parsedBgImgFiles);
        if (data.data?.mainFile) {
          setUploadedPdf(() => convertedDataUrl);
        }
      }, 100);
    }
  }, [data, data?.data, reset]);

  useEffect(() => {
    if (isSuccessUpdateFieldsById) {
      handleClose();
    }
  }, [handleClose, isSuccessUpdateFieldsById]);

  if (isGetLoading || isPostLoading) {
    return <LoadingSpinner />;
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TitleEdit>Заголовок:</TitleEdit>
      <Controller
        name='title'
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
        )}
      />
      <TitleEdit>ID объекта:</TitleEdit>
      <Controller
        name='objectId'
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            error={!!errors.objectId}
            helperText={errors.objectId?.message}
          />
        )}
      />

      <TitleEdit>Пароль к проекту:</TitleEdit>
      <Controller
        name='projectPassword'
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            error={!!errors.projectPassword}
            helperText={errors.projectPassword?.message}
          />
        )}
      />

      <TitleEdit>Цена:</TitleEdit>
      <Controller
        name='price'
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            error={!!errors.price}
            helperText={errors.price?.message}
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
        <ImageGallery onChange={setImages} initialImages={srcImagesBase64} />
      </Box>

      <TitleEdit>Ссылка локации на карте:</TitleEdit>
      <Controller
        name='mapLink'
        control={control}
        render={({ field }) => (
          <CustomInput
            {...field}
            error={!!errors.mapLink}
            helperText={errors.mapLink?.message}
          />
        )}
      />

      <UploadButton text='Сохранить' type='submit' icon={<PlusFile />} />
    </StyledForm>
  );
};

export default EditResourceCardForm;
