import { Card, List, ListItem, Title } from '@tremor/react';
import { getCategories } from '../../services/db/categories/get-categories';

export const CategoriesList = async () => {
  const categories = await getCategories();

  return (
    <Card>
      <Title className="mb-2">Categories</Title>
      <List>
        {categories.map(({ id, name }) => (
          <ListItem key={id}>{name}</ListItem>
        ))}
      </List>
    </Card>
  );
};
