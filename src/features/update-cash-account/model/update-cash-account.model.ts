import { z } from 'zod';

export const formFields = {
  id: 'id',
  name: 'name',
  startBalance: 'startBalance',
  currencyId: 'currencyId',
};

export const updateCashAccountSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  startBalance: z.coerce.number().nonnegative(),
  currencyId: z.coerce.number().positive(),
});
