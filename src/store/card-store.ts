import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Card = {
  id: number;
  cardUser: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

type State = {
  cards: Card[];
};

type Action = {
  addCard: (newCard: Card) => void;
};

export const useCardStore = create(
  persist<State & Action>(
    (set) => ({
      cards: [],
      addCard: (newCard) =>
        set((state) => ({ cards: [...state.cards, newCard] })),
    }),
    {
      name: "card-store",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
