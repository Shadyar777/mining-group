import * as yup from 'yup';

export const resourceSchema = yup.object().shape({
  title: yup.string().required('Заголовок обязателен'),
  projectPassword: yup
    .string()
    .length(6, 'Пароль должен содержать ровно 6 символов')
    .required('Пароль обязателен'),
  price: yup.string().optional(),
  // .number()
  // .typeError('Цена должна быть числом')
  // .required('Цена обязательна'),
  mapLink: yup.string().optional().url('Введите действующую URL ссылку'),
  // .string()
  // .url('Введите действующую URL ссылку').notRequired()
  // .required('Ссылка обязательна'),
});
