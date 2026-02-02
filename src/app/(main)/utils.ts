export const whatsappNumber = '916262000219';
export const siteUrl = 'https://avantikatravels.com';

export function createWhatsAppUrl(packageTitle: string): string {
  const base = `https://wa.me/${whatsappNumber}`;
  const message = `Hi, I want to book a car for the "${packageTitle}" package.\n\nMy trip details:\n• Date & time:\n• Pickup location:\n• Drop location:\n• Number of passengers:\n• One-way / round trip / number of days:`;
  return `${base}?text=${encodeURIComponent(message)}`;
}
