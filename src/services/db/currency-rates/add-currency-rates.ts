import { prisma } from '../../../lib/prisma';
import { ICurrencyRate } from '../../../models/currency-rate.model';

export const addCurrencyRates = async (rates: ICurrencyRate[]) => {
  return prisma.currencyRate.createMany({
    data: rates
  });
};
