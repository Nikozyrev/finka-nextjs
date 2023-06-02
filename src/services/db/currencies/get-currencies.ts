import { prisma } from '../../../lib/prisma';

export const getCurrencies = async () => {
  const data = await prisma.currency.findMany();

  return data;
};
