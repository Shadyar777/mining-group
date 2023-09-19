import { Dispatch, SetStateAction, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { styled, Switch } from '@mui/material';
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
import { useAddJobMutation, useUpdateJobMutation } from '../../../../rtk-query';

const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px 0',
  color: '#2A2A2A',
  '& .editTitle': {
    fontSize: '48px',
  },
  '& .flex': {
    display: 'flex',
    gap: '0 20px',
    // justifyContent: 'center',
    alignItems: 'center',
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
  conditions: yup.string().required('Условия не может быть пустым'),
  tasks: yup.string().required('Задачи не могут быть пустыми'),
  phone: yup.string(),
  mail: yup.string().email('Недопустимый адрес электронной почты'),
  isVisible: yup.boolean().required(),
});

type FormData = {
  backgroundColor: ColorForColorPickerType;
  title: string;
  conditions: string;
  tasks: string;
  phone?: string;
  mail?: string;
  isVisible: boolean;
};

type EditingToolsForVacancyCardProps = {
  jobContent?: {
    jobId: number;
    title: string;
    conditions: string;
    tasks: string;
    mail: string;
    backgroundColor: string;
    phone: string;
    active: boolean;
  };
  setOpenEdit: Dispatch<SetStateAction<boolean>>;
};
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const EditingToolsForVacancyCard = ({
  jobContent,
  setOpenEdit,
}: EditingToolsForVacancyCardProps) => {
  const { control, handleSubmit, reset } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore FIXME
    resolver: yupResolver(validationSchema),
    defaultValues: {
      isVisible: false,
    },
  });
  console.log(jobContent);
  const [addJob, { isSuccess: isSuccessAddJob, isLoading: isLoadingAddJob }] =
    useAddJobMutation();
  const [
    updateJob,
    { isSuccess: isSuccessUpdate, isLoading: isLoadingUpdateJob },
  ] = useUpdateJobMutation();

  const onSubmit = (data: FormData) => {
    const {
      backgroundColor,
      mail,
      conditions,
      tasks,
      phone,
      title,
      isVisible,
    } = data;
    // Добавление
    if (!jobContent?.jobId) {
      addJob({
        backgroundColor,
        title,
        mail: mail || '',
        tasks,
        phone: phone || '',
        conditions,
        active: isVisible,
      });
      return;
    }
    // Редактирование
    updateJob({
      id: jobContent.jobId,
      backgroundColor,
      title,
      mail: mail || '',
      tasks,
      phone: phone || '',
      conditions,
      active: isVisible,
    });
  };

  useEffect(() => {
    if (isSuccessAddJob || isSuccessUpdate) {
      setOpenEdit(false);
    }
  }, [setOpenEdit, isSuccessAddJob, isSuccessUpdate]);

  useEffect(() => {
    // Заполняем начальные данные
    if (jobContent?.jobId) {
      reset({
        isVisible: jobContent.active,
        title: jobContent.title,
        conditions: jobContent.conditions,
        mail: jobContent.mail,
        tasks: jobContent.tasks,
        phone: jobContent.phone,
        backgroundColor: jobContent.backgroundColor as ColorForColorPickerType,
      });
    }
  }, [jobContent, jobContent?.jobId, reset]);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div className='flex'>
        <TitleEdit>Видимость:</TitleEdit>
        <Controller
          name='isVisible'
          control={control}
          render={({ field }) => (
            <Switch
              {...label}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
      </div>
      <div className='flex'>
        <TitleEdit>Фоновый цвет:</TitleEdit>
        <Controller
          name='backgroundColor'
          control={control}
          render={({ field }) => (
            <ColorPicker value={field.value} onChange={field.onChange} />
          )}
        />
      </div>
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
      <TitleEdit>Условия:</TitleEdit>
      <Controller
        name='conditions'
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
        name='phone'
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

      <UploadButton
        text='Сохранить'
        disabled={isLoadingAddJob || isLoadingUpdateJob}
        icon={<PlusFile />}
        type='submit'
      />
    </StyledForm>
  );
};

export default EditingToolsForVacancyCard;
