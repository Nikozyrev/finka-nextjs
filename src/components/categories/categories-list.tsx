import { Card, List, ListItem, Title } from '@tremor/react';
import { getCategories } from '../../services/db/categories/get-categories';

export default async function CategoriesList({ userId }: { userId: string }) {
  const categories = await getCategories(userId);

  return (
    <Card>
      <Title className="mb-2">Categories</Title>
      <List>
        {categories &&
          categories.map(({ id, name }) => (
            <ListItem key={id}>{name}</ListItem>
          ))}
      </List>
    </Card>
  );
}
