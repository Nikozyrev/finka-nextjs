import { getRatesOnDate } from './get-rates-on-date';
import { getCurrencies } from '../db/currencies/get-currencies';
import { addCurrencyRates } from '../db/currency-rates/add-currency-rates';
import { ICurrencyRate } from '../../models/currency-rate.model';

export const saveRates = async (date: Date) => {
  const source = 'nbrb';
  date.setUTCHours(0, 0, 0, 0);

  const currencies = await getCurrencies();

  const allRates = await getRatesOnDate(date);

  const rates = currencies.reduce((acc, { id, symbol }) => {
    if (symbol === 'BYN')
      return [...acc, { date, rate: 1, currencyId: id, source }];

    const rateData = allRates.find(
      ({ Cur_Abbreviation }) => Cur_Abbreviation === symbol
    );
    if (!rateData) throw new Error('Failed to get rate');

    const rate = Number(
      (rateData.Cur_OfficialRate / rateData.Cur_Scale).toFixed(4)
    );

    return [...acc, { date, rate, currencyId: id, source }];
  }, [] as ICurrencyRate[]);

  try {
    const dbData = await addCurrencyRates(rates);
    return dbData;
  } catch {
    throw new Error(
      `Rates on date ${date.toDateString()} are already in the database.`
    );
  }
};
