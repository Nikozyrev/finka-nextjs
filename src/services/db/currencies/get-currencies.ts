import { unstable_cache } from 'next/cache';
import { prisma } from '@/shared/lib/prisma';

export const getCurrencies = unstable_cache(
  async () => {
    const data = await prisma.currency.findMany();
    return data;
  },
  ['cache-key'],
  { revalidate: 36000 }
);
