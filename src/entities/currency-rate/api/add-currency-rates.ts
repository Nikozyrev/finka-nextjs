import { prisma } from '@/shared/lib/prisma';
import { ICurrencyRate } from '../model/currency-rate.model';

export const addCurrencyRates = async (rates: ICurrencyRate[]) => {
  return prisma.currencyRate.createMany({
    data: rates,
  });
};
