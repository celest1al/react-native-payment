export type Card = {
  id: number;
  cardUser: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  omiseCardData: {
    object: string;
    id: string;
    livemode: boolean;
    used: boolean;
    card: {
      object: string;
      id: string;
      livemode: boolean;
      security_code_check: boolean;
      expiration_month: number;
      expiration_year: number;
      bank: string;
      brand: string | null;
      city: string;
      country: string;
      financing: string;
      fingerprint: string;
      first_digits: string | null;
      last_digits: string;
      name: string;
      phone_number: string | null;
      postal_code: string | null;
      state: string | null;
      street1: string | null;
      street2: string | null;
      tokenization_method: string | null;
      created: string;
    };
    location: string;
    charge_status: string;
    created: string;
  };
};

export type CardStoreState = {
  cards: Card[];
};

export type CardStoreAction = {
  addCard: (newCard: Card) => void;
};
