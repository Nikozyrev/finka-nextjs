import { ICurrencyRateResponse } from './rate-response.model';

export const getRatesOnDate = async (date: Date) => {
  const baseUrl = 'https://api.nbrb.by/exrates/rates/';

  const params = `?parammode=2&ondate=${date.toDateString()}&periodicity=0`;

  const finalURL = baseUrl + params;

  const response = await fetch(finalURL);

  const data = await response.json();

  return data as ICurrencyRateResponse[];
};
