'use client';

import { useState } from 'react';
import {
  ICashFlowCategory,
  ICashFlowSubCategory,
} from '../model/cash-flow.model';
import { CashFlowTableRow } from './cash-flow-table-row';

export function CashFlowTableCategoryRow({
  category,
  subcategories,
  months,
}: {
  category: ICashFlowCategory;
  subcategories: ICashFlowSubCategory[];
  months: number[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CashFlowTableRow
        className="text-sm cursor-pointer"
        name={category.name}
        months={months}
        sumsByMonths={category.sumsByMonth}
        onClick={() => setIsOpen((v) => !v)}
      />
      {isOpen &&
        subcategories
          .filter(({ categoryId }) => categoryId === category.id)
          .sort(
            (a, b) =>
              Math.abs(b.sumsByMonth.totalYear) -
              Math.abs(a.sumsByMonth.totalYear)
          )
          .map((s) => (
            <CashFlowTableRow
              key={s.id}
              className="text-slate-400 text-[0.8rem]"
              name={s.name}
              sumsByMonths={s.sumsByMonth}
              months={months}
            />
          ))}
    </>
  );
}
