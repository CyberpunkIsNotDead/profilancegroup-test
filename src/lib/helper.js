export function formatDate(ISOString) {
  const date = new Date(ISOString);

  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
