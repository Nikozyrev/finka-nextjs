import { type Decimal } from '@prisma/client/runtime/library';

export const showNum = (num: string | number | Decimal | undefined) => {
  if (!num) return;
  if (typeof num === 'string') {
    return Number(num).toFixed(0);
  } else {
    return num.toFixed(0);
  }
};
