const formatFr = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "full",
});

export function formatDate(date: Date): string {
  return formatFr.format(date);
}