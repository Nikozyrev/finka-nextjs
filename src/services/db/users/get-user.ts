import { prisma } from '../../../lib/prisma';

export const getUserByEmail = async (email: string) => {
  if (!email) return;

  return prisma.user.findFirst({ where: { email } });
};
