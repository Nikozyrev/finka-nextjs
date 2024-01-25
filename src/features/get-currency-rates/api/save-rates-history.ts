'use server';

import { saveRatesOnDate } from "./save-rates-on-date";

export async function saveRatesHistory(daysCount: number) {
  const startDate = new Date();
  let counter = 0;
  const dayMilliseconds = 86400000;

  while (counter < daysCount) {
    const date = new Date(startDate.getTime() - dayMilliseconds * counter);
    console.log('Fetching date', date.toDateString());
    await saveRatesOnDate(date);
    await new Promise((res) => setTimeout(res, 200));
    counter += 1;
  }

  console.log('Rates fetched!');
};