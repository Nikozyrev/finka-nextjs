export async function addCategory({
  name,
  mainCategoryId,
}: {
  name: string;
  mainCategoryId: string;
}) {
  return fetch('/api/categories', {
    method: 'POST',
    body: JSON.stringify({
      name,
      mainCategoryId,
    }),
  });
}
