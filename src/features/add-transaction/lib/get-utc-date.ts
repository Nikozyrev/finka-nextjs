export const getUTCDate = (date: Date) => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const dateString = `${year}-${month}-${day}T00:00:00.000Z`;
  const utcDate = new Date(dateString);
  return utcDate;
};
