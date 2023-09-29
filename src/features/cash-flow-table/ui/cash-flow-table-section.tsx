import { FC } from 'react';
import { TableCell, TableRow } from '@tremor/react';
import { CashFlowSection, CategoryType } from '@prisma/client';
import { ICashFlowCategory, ICashFlowTotals } from '../model/cash-flow.model';
import { CashFlowTableRow } from './cash-flow-table-row';

interface ICashFlowTableSectionProps {
  section: CashFlowSection;
  categories: ICashFlowCategory[];
  totals: ICashFlowTotals;
  months: number[];
}

export const CashFlowTableSection: FC<ICashFlowTableSectionProps> = ({
  months,
  section,
  categories,
  totals,
}) => {
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
        <CashFlowTableRow
          key={category.id}
          className="text-sm"
          name={category.name}
          months={months}
          sumsByMonths={category.sumsByMonths}
        />
      ))}
      <CashFlowTableRow
        className="font-bold text-base"
        name={'Total Income'}
        months={months}
        sumsByMonths={totals[section].cashFlowIn}
      />
      {expenseCategories.map((category) => (
        <CashFlowTableRow
          key={category.id}
          className="text-sm"
          name={category.name}
          months={months}
          sumsByMonths={category.sumsByMonths}
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
};
