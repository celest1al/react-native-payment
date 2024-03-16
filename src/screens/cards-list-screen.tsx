import { Pressable, SafeAreaView, Text, View } from "react-native";
import { CreditCard } from "../components/credit-card";
import { useCardStore } from "../store/card-store";
import { useMutation } from "@tanstack/react-query";
import { reactNativeOmise } from "../libs/omise";
import Toast from "react-native-toast-message";
import { getRandomNumber } from "../libs/card-format";

interface CardsScreen {
  navigation: any;
}

export function CardsScreen({ navigation }: CardsScreen) {
  const cards = useCardStore((state) => state.cards);
  const { mutate: createSourceMutation } = useMutation({
    mutationKey: ["create-source"],
    mutationFn: async (token: string) => {
      const data = await reactNativeOmise.createCharge({
        amount: getRandomNumber(1000, 10000),
        currency: "thb",
        card: token,
      });

      return data;
    },
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "Payment successful",
        text2: "Card charged successfully",
      });
    },
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      {cards.length > 0 ? (
        <View className="mt-4 flex-1 items-center gap-4 p-4">
          {cards.map((card, index) => (
            <Pressable
              key={`${card.id}-${index}`}
              onPress={() => createSourceMutation(card?.omiseCardData?.id)}
            >
              <CreditCard card={card} />
            </Pressable>
          ))}
        </View>
      ) : (
        <View className="flex-1 items-center justify-center gap-4">
          <Text className="text-[40px]">💳</Text>
          <Text className="text-lg text-black">No Cards Found</Text>
          <Text className="text-center text-lg text-black">
            We recommend adding a card {"\n"} for easy payment
          </Text>
          <Pressable onPress={() => navigation.navigate("create-card")}>
            <Text className="text-lg font-medium text-[#4AD8DA]">
              Add New Card
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
