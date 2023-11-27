'use client';

import { useEffect, useState } from 'react';
import { getSubcategoriesSums } from '../api/get-sums-by-main-category';
import {
  ICashFlowCategory,
  ICashFlowSubCategory,
} from '../model/cash-flow.model';
import { CashFlowTableRow } from './cash-flow-table-row';

export function CashFlowTableCategoryRow({
  category,
  year,
  baseCurrencyId,
  months,
}: {
  category: ICashFlowCategory;
  year: number;
  baseCurrencyId: number;
  months: number[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [subcategories, setSubcategories] = useState<ICashFlowSubCategory[]>(
    []
  );

  useEffect(() => {
    if (isOpen) {
      getSubcategoriesSums(category.id, year, baseCurrencyId).then((v) =>
        setSubcategories(v)
      );
    }
  }, [isOpen, category.id, year, baseCurrencyId]);

  return (
    <>
      <CashFlowTableRow
        className="text-sm cursor-pointer"
        name={category.name}
        months={months}
        sumsByMonths={category.sumsByMonths}
        onClick={() => setIsOpen((v) => !v)}
      />
      {isOpen &&
        subcategories.map((s) => (
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
