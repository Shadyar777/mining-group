/**
 * Format currency amount to readable string
 * @param {number} [value=0] - value to be formatted
 * @param {string} [currency=KZT] - ISO 4217 currency code
 * @param {string} [locales=ru-KZ] - A string with a BCP 47 language tag
 * @returns {string} - formatted currency string
 */
export const currencyFormat = (
  value: number = 0,
  currency: string = 'KZT',
  locales: string = 'ru-KZ',
): string => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
