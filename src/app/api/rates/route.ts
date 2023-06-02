import { NextResponse } from 'next/server';
import { saveRates } from '../../../services/nbrb-currency-rates/save-today-rates';

const saveTodayRates = async () => {
  try {
    const rates = await saveRates(new Date());
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
