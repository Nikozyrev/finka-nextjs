export interface ICurrencyRate {
  id?: number;
  date: Date;
  rate: number;
  currencyId: number;
  baseCurrencyId: number;
  source?: string;
}
