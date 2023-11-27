import { TableCell, TableRow } from '@tremor/react';
import { CashFlowSection, CategoryType } from '@prisma/client';
import { ICashFlowCategory, ICashFlowTotals } from '../model/cash-flow.model';
import { CashFlowTableRow } from './cash-flow-table-row';
import { CashFlowTableCategoryRow } from './cash-flow-table-category-row';

interface ICashFlowTableSectionProps {
  section: CashFlowSection;
  categories: ICashFlowCategory[];
  totals: ICashFlowTotals;
  months: number[];
  year: number;
  baseCurrencyId: number;
}

export function CashFlowTableSection({
  months,
  section,
  categories,
  totals,
  year,
  baseCurrencyId,
}: ICashFlowTableSectionProps) {
  const sectionCategories = categories.filter(
    ({ cashFlowSection }) => cashFlowSection === section
  );

  const incomeCategories = sectionCategories.filter(
    ({ categoryType }) => categoryType === CategoryType.INCOME
  );

  const expenseCategories = sectionCategories.filter(
    ({ categoryType }) => categoryType === CategoryType.EXPENSE
  );

  return (
    <>
      <TableRow>
        <TableCell className="italic font-semibold p-2 sticky top-0 left-0 bg-white">
          {section}
        </TableCell>
      </TableRow>
      {incomeCategories.map((category) => (
        <CashFlowTableCategoryRow
          key={category.id}
          category={category}
          year={year}
          baseCurrencyId={baseCurrencyId}
          months={months}
        />
      ))}
      <CashFlowTableRow
        className="font-bold text-base"
        name={'Total Income'}
        months={months}
        sumsByMonths={totals[section].cashFlowIn}
      />
      {expenseCategories.map((category) => (
        <CashFlowTableCategoryRow
          key={category.id}
          category={category}
          year={year}
          baseCurrencyId={baseCurrencyId}
          months={months}
        />
      ))}
      <CashFlowTableRow
        className="font-bold text-base"
        name={'Total Expenses'}
        months={months}
        sumsByMonths={totals[section].cashFlowOut}
      />
      <CashFlowTableRow
        className="font-bold text-base"
        name={'Cash Flow'}
        months={months}
        sumsByMonths={totals[section].cashFlow}
      />
    </>
  );
}
