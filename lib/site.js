export const WHATSAPP_NUMBER = "2347057249377";
export const WHATSAPP_LINK = (message = "Hi! I'd like to order some Zayti coconut oil.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
