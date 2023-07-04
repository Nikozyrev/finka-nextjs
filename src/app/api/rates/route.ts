import { NextResponse } from 'next/server';
import { saveRatesOnDate } from '../../../services/nbrb-currency-rates/save-rates-on-date';

const saveTodayRates = async () => {
  try {
    const rates = await saveRatesOnDate(new Date());
    return NextResponse.json(rates);
  } catch (error) {
    let message = '';
    if (error instanceof Error) {
      message = error.message;
    }
    return new Response(JSON.stringify({ error: message }), {
      status: 400
    });
  }
};

const saveRatesHistory = async () => {
  const startDate = new Date();
  let counter = 0;
  const dayMilliseconds = 86400000;

  while (counter < 365) {
    const date = new Date(startDate.getTime() - dayMilliseconds * counter);
    console.log(date);
    await saveRatesOnDate(date);
    await new Promise((res) => setTimeout(res, 2000));
    counter += 1;
  }

  console.log('Rates fetched!');
};

export { saveTodayRates as GET };
