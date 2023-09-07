import { IAddCategoryType } from '../models/main-category.model';

export const getSumWithSign = (categoryType: IAddCategoryType, sum: number) => {
  const abs = Math.abs(sum);
  const sumValue = categoryType === 'EXPENSE' ? -abs : abs;
  return sumValue;
};
