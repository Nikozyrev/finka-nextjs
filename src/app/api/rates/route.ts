import { NextResponse } from 'next/server';
import { saveRatesOnDate } from '@/features/get-currency-rates';

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
      status: 400,
    });
  }
};

export { saveTodayRates as GET };
