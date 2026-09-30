export function createWhatsAppUrl(message) {
  const number = "5491176550890";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
