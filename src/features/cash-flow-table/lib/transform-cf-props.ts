const DEFAULT = {
  currencyId: 1,
  months: 12,
};

const getYear = (year: string | undefined): number =>
  year ? Number(year) : new Date().getFullYear();

const getCurrencyId = (currencyId: string | undefined): number =>
  Number(currencyId) || DEFAULT.currencyId;

const getMonths = (max: number): number[] =>
  max ? Array.from(new Array(max), (_, i) => i + 1) : [];

export const transformCFProps = (props: {
  year?: string;
  currencyId?: string;
}) => {
  const year = getYear(props?.year);
  const currencyId = getCurrencyId(props.currencyId);
  const months = getMonths(year && DEFAULT.months);

  return { year, currencyId, months };
};
