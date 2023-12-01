import { type Decimal } from '@prisma/client/runtime/library';

export const showNum = (num: string | number | Decimal | undefined) =>
  num && Number(num).toFixed(0);

export const showPercent = (num: string | number | Decimal | undefined) =>
  num && (Number(num) * 100).toFixed(0) + '%';
