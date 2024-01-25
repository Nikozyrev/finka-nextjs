import { NextResponse } from 'next/server';
import { saveRatesHistory } from '@/features/get-currency-rates/api/save-rates-history';

const saveLatest10DaysRates = async () => {
  try {
    await saveRatesHistory(10);
    return NextResponse.json({ status: 'success' });
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

export { saveLatest10DaysRates as GET };
