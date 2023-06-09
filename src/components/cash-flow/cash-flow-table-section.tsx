import { CashFlowSection, CategoryType } from '@prisma/client';
import {
  ICashFlowCategory,
  ICashFlowTotals
} from '../../models/cash-flow.model';
import CashFlowTableRow from './cash-flow-table-row';
import { TableCell, TableRow } from '@tremor/react';

interface ICashFlowTableSectionProps {
  section: CashFlowSection;
  categories: ICashFlowCategory[];
  totals: ICashFlowTotals;
  months: number[];
}

export default function CashFlowTableSection({
  months,
  section,
  categories,
  totals
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
        <TableCell className="italic font-semibold p-2">{section}</TableCell>
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
}
