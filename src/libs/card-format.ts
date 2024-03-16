export const creditCardPatterns = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^5[1-5][0-9]{14}$/,
  amex: /^3[47][0-9]{13}$/,
  discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
};

export const checkCreditCardType = (value: string): string | null => {
  if (creditCardPatterns.visa.test(value)) {
    return "Visa";
  }

  if (creditCardPatterns.mastercard.test(value)) {
    return "Mastercard";
  }

  if (creditCardPatterns.amex.test(value)) {
    return "Amex";
  }

  if (creditCardPatterns.discover.test(value)) {
    return "Discover";
  }

  if (creditCardPatterns.diners.test(value)) {
    return "Diners";
  }

  if (creditCardPatterns.jcb.test(value)) {
    return "JCB";
  }

  return null;
};

export const formattedCreditCard = (value: string) => {
  const number = value.trim().replace(/[^0-9]/g, "");

  if (number.length <= 4) {
    return number;
  }

  if (number.length <= 8) {
    return `${number.slice(0, 4)} ${number.slice(4)}`;
  }

  if (number.length <= 12) {
    return `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8)}`;
  }

  return `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(
    8,
    12
  )} ${number.slice(12, 16)}`;
};

export const validateExpirationDate = (
  expirationMonth: number,
  expirationYear: number
) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // January is 0

  if (expirationYear > currentYear) {
    return true;
  } else if (
    expirationYear === currentYear &&
    expirationMonth >= currentMonth
  ) {
    return true;
  }

  return false;
};

export const formattedExpiryDate = (value: string) => {
  const number = value.trim().replace(/[^0-9]/g, "");

  if (number.length <= 2) {
    return number;
  }

  return `${number.slice(0, 2)}/${number.slice(2, 4)}`;
};

export const formattedCVV = (value: string) => {
  return value.trim().replace(/[^0-9]/g, "");
};

export const getRandomNumber = (min: number = 1000, max: number = 50000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
