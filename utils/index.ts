export function formatDate(date: string) {
    return new Date(date).toLocaleDateString('nb-NO', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }