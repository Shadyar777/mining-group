import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { styled } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EditCustomInput from '../../../common/buttons/EditCustomInput.tsx';
import UploadButton from '../../../common/buttons/UploadButton.tsx';
import PlusFile from '../../../../svgs/PlusFile.tsx';
import TitleEdit from '../../common/TitleEdit.tsx';
import ColorPicker from './ColorPicker.tsx';
import {
  colorForColorPicker,
  ColorForColorPickerType,
} from '../utils/colorForColorPicker.ts';

const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px 0',
  color: '#2A2A2A',
  '& .editTitle': {
    fontSize: '48px',
  },

  '.upload-button': {
    width: '200px',
    display: 'flex',
    alignSelf: 'center',
  },
}));

const validationSchema = yup.object().shape({
  backgroundColor: yup
    .string()
    .oneOf(colorForColorPicker, 'Недопустимый цвет')
    .required('Цвет обязателен'),
  title: yup.string().required('Заголовок не может быть пустым'),
  tasks: yup.string().required('Задачи не могут быть пустыми'),
  contacts: yup.string(),
  mail: yup.string().email('Недопустимый адрес электронной почты'),
});

type FormData = {
  backgroundColor: ColorForColorPickerType;
  title: string;
  tasks: string;
  contacts?: string;
  mail?: string;
};

type EditingToolsForVacancyCardProps = {
  id?: string | number;
};

const initialData = {
  backgroundColor: '#004B8F',
  title: 'Начальный заголовок',
  tasks: 'Начальные задачи',
  contacts: 'Начальные контакты',
  mail: 'info@imgkz.com',
} as const;

type InitialDataKeys = keyof typeof initialData;
const EditingToolsForVacancyCard = ({
  id,
}: EditingToolsForVacancyCardProps) => {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore FIXME
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(id);
    // Заполняем начальные данные
    if (id) {
      for (const key in initialData) {
        setValue(
          key as InitialDataKeys,
          initialData[key as keyof typeof initialData],
        );
      }
    }
  }, [id, setValue]);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TitleEdit>Фоновый цвет:</TitleEdit>
      <Controller
        name='backgroundColor'
        control={control}
        render={({ field }) => (
          <ColorPicker value={field.value} onChange={field.onChange} />
        )}
      />
      <TitleEdit>Заголовок:</TitleEdit>
      <Controller
        name='title'
        control={control}
        render={({ field, fieldState }) => (
          <EditCustomInput
            {...field}
            placeholder=''
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
      />
      <TitleEdit>Задачи:</TitleEdit>
      <Controller
        name='tasks'
        control={control}
        render={({ field, fieldState }) => (
          <EditCustomInput
            {...field}
            placeholder=''
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
          />
        )}
      />
      <TitleEdit>Контакты:</TitleEdit>
      <Controller
        name='contacts'
        control={control}
        render={({ field, fieldState }) => (
          <EditCustomInput
            {...field}
            placeholder=''
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
            icon={<PhoneRoundedIcon />}
          />
        )}
      />
      <Controller
        name='mail'
        control={control}
        render={({ field, fieldState }) => (
          <EditCustomInput
            {...field}
            placeholder=''
            error={!!fieldState?.error}
            helperText={fieldState?.error?.message}
            icon={<EmailRoundedIcon />}
          />
        )}
      />

      <UploadButton text='Сохранить' icon={<PlusFile />} type='submit' />
    </StyledForm>
  );
};

export default EditingToolsForVacancyCard;
