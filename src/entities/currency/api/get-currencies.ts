import { unstable_cache } from 'next/cache';
import { prisma } from '@/shared/lib/prisma';

export const getCurrencies = unstable_cache(
  async () => {
    const data = await prisma.currency.findMany();
    console.log('currencies', data.length);

    return data;
  },
  ['cache-key'],
  { revalidate: 36000 }
);
