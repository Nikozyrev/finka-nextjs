'use client';

import { Badge, BadgeProps } from '@tremor/react';

export function CurrencyBadge({ symbol }: { symbol: string }) {
  const colors: { [symbol: string]: BadgeProps['color'] } = {
    BYN: 'red',
    USD: 'green',
    RUB: 'violet',
    EUR: 'sky',
  };

  return <Badge color={colors[symbol]}>{symbol}</Badge>;
}
