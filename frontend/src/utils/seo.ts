export function buildPageTitle(parts: Array<string | undefined | null>): string {
  return parts.filter(Boolean).join(' • ');
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}