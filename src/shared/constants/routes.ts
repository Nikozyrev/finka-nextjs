export interface IRoute {
  text: string;
  link: ROUTES;
}

export enum ROUTES {
  MAIN = '/',
  USER = '/user',
  USER_DASHBOARD = '/user/dashboard',
  USER_CASH_FLOW = '/user/cashflow',
  USER_ACCOUNTS = '/user/accounts',
  USER_TRANSACTIONS = '/user/transactions',
  USER_CATEGORIES = '/user/categories',
}

export const routes: IRoute[] = [
  { text: 'Dashboard', link: ROUTES.USER_DASHBOARD },
  { text: 'Cash Flow', link: ROUTES.USER_CASH_FLOW },
  { text: 'Accounts', link: ROUTES.USER_ACCOUNTS },
  { text: 'Transactions', link: ROUTES.USER_TRANSACTIONS },
  { text: 'Categories', link: ROUTES.USER_CATEGORIES },
];
