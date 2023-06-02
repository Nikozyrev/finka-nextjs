export interface ICurrencyRate {
  id?: number;
  date: Date;
  rate: number;
  source?: string;
  currencyId: number;
}
