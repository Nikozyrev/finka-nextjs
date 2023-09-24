import { getRatesOnDate } from './get-rates-on-date';
import { getCurrencies } from '@/entities/currency';
import { addCurrencyRates } from '../db/currency-rates/add-currency-rates';
import { calculateRatesOnDate } from './calculate-rates-on-date';

export const saveRatesOnDate = async (date: Date) => {
  date.setUTCHours(0, 0, 0, 0);

  const currencies = await getCurrencies();

  const allRates = await getRatesOnDate(date);

  const rates = calculateRatesOnDate(date, currencies, allRates);

  try {
    const dbData = await addCurrencyRates(rates);
    return dbData;
  } catch {
    throw new Error(
      `Rates on date ${date.toDateString()} are already in the database.`
    );
  }
};
