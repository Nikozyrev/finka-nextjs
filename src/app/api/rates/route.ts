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

export { saveTodayRates as GET };
