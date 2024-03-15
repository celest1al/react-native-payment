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
    12,
  )} ${number.slice(12, 16)}`;
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
