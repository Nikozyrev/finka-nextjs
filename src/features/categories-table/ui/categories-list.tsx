import { Card, List, ListItem, Title } from '@tremor/react';
import { getUserCategories } from '@/entities/category';

export const CategoriesList = async () => {
  const categories = await getUserCategories();

  return (
    <Card>
      <Title className="mb-2">Categories</Title>
      <List>
        {categories.map(
          ({ id, name, mainCategoryName, categoryType, cashFlowSection }) => (
            <ListItem key={id}>
              <span>{name}</span>
              <span>{mainCategoryName}</span>
              <span>{categoryType}</span>
              <span>{cashFlowSection}</span>
            </ListItem>
          )
        )}
      </List>
    </Card>
  );
};
