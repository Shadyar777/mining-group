import * as yup from 'yup';

export const resourceSchema = yup.object().shape({
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
