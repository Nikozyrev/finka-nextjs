export async function addMainCategory({
  name,
  categoryType,
  cashFlowSection,
}: {
  name: string;
  categoryType: string;
  cashFlowSection: string;
}) {
  return fetch('/api/main-categories', {
    method: 'POST',
    body: JSON.stringify({
      name,
      categoryType,
      cashFlowSection,
    }),
  });
}
