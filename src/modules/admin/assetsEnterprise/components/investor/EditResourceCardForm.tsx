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
import {
  useGetFieldsByIdQuery,
  useUpdateFieldsByIdMutation,
} from '../../../../../rtk-query';
import LoadingSpinner from '../../../../common/loadingSpinner';
import { base64ToFile } from '../../../../../utils';
import { updateCheckboxes } from '../../../../../utils/updateCheckboxes.ts';
import { dataURLtoBlob } from '../../../../../utils/dataURLtoBlob.tsx';
import { getCheckedNames } from '../../../../../utils/getCheckedNames.ts';
import { resourceSchema } from '../../utils/resourceSchema.ts';
import { useAppSelector } from '../../../../../store/hooks.ts';
import { getAddGlobalLanguages } from '../../../../common/sliceCommon/slice.ts';
import {
  convertAllImagesToBase64,
  convertFileToBase64,
} from '../../../../../utils/convertFileToBase64.ts';

type FormData = {
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
  const [isLoadingWhenFillingData, setIsLoadingWhenFillingData] =
    useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
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
    moreImages.forEach((item, index) => {
      if (item.src) {
        const imgBlob = dataURLtoBlob(item.src);
        formData.append('images', imgBlob, `image${index}`);
      }
    });
    // const arr = moreImages.filter(item => Object.keys(item).length)
    //
    // if (!arr.length) {
    //   formData.append('images', new File([], `empty`));
    // }

    const bgImage = String(uploadedImage).includes('base64')
      ? await base64ToFile({
          dataURI: uploadedImage as string,
          fileName: 'backgroundImageFiles',
          optionsType: 'image/jpeg',
        })
      : uploadedImage;

    if (bgImage) {
      formData.append('backgroundImageFiles', bgImage as unknown as string);
    }

    const pdfFile = String(urlPdf).includes('base64')
      ? await base64ToFile({
          dataURI: urlPdf as string,
          fileName: 'pdf',
          optionsType: 'application/pdf',
        })
      : null;
    formData.append('mainFile', pdfFile as unknown as string);
    formData.append('location', data?.mapLink ?? '');
    formData.append('password', data.projectPassword);
    formData.append('price', String(data.price));
    formData.append('resources', getCheckedNames(resourceData).join());
    formData.append('title', data.title);
    formData.append('id', String(id));
    updateFieldsById(formData);
  };

  const asyncFunc = async () => {
    if (data) {
      setIsLoadingWhenFillingData(true);
      const base64BgImage = data?.data?.backgroundImageFiles
        ? await convertFileToBase64(data?.data?.backgroundImageFiles)
        : null;
      const base64Images = data.data?.images?.length
        ? await convertAllImagesToBase64(data.data?.images)
        : null;
      const base64PdfFile = data.data?.mainFile
        ? await convertFileToBase64(data.data?.mainFile)
        : null;
      setResourceData(updateCheckboxes(resourceData, data.data.resources));
      reset({
        title: data.data.title,
        projectPassword: data.data.password,
        price: data.data.price,
        mapLink: data.data.location,
      });
      setUploadedImage(() => base64BgImage);
      setImages(
        () =>
          base64Images?.map((item) => ({
            src: item,
            file: '' as any,
          })) || [],
      );
      if (data.data?.mainFile) {
        setUploadedPdf(() => base64PdfFile);
      }
      setIsLoadingWhenFillingData(false);
    }
  };

  useEffect(() => {
    if (data) {
      asyncFunc().then(console.log);
    }
  }, [data, data?.data, reset]);

  useEffect(() => {
    if (isSuccessUpdateFieldsById) {
      handleClose();
    }
  }, [handleClose, isSuccessUpdateFieldsById]);

  if (isGetLoading || isPostLoading || isLoadingWhenFillingData) {
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
        <ImageGallery
          onChange={setImages}
          initialImages={moreImages.length ? moreImages : []}
          isEdit={false}
        />
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
