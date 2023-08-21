export const formatDate = (str: string) => {
  const date = new Date(str);

  // Получаем день, месяц и год
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0, поэтому добавляем 1
  const year = date.getUTCFullYear();

  // Возвращаем в нужном формате
  return `${day}.${month}.${year}`;
};
