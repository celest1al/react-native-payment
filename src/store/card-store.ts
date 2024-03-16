import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { CardStoreAction, CardStoreState } from "../types/card";

export const useCardStore = create(
  persist<CardStoreState & CardStoreAction>(
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
