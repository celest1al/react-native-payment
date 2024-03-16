import { useMemo, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  checkCreditCardType,
  formattedCreditCard,
  formattedCVV,
  formattedExpiryDate,
} from "../libs/card-format";
import { useMutation } from "@tanstack/react-query";
import { reactNativeOmise } from "../libs/omise";
import { useCardStore } from "../store/card-store";
import Toast from 'react-native-toast-message';

interface CreateCardScreenProps {
  navigation: any;
}

export function CreateCardScreen({ navigation }: CreateCardScreenProps) {
  const addCard = useCardStore((state) => state.addCard);
  const [cardNumber, setCardNumber] = useState("");
  const [cardUser, setCardUser] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const { mutate: createCardMutation } = useMutation({
    mutationKey: ["create-card"],
    mutationFn: async () => {
      const data = await reactNativeOmise.createToken({
        card: {
          name: cardUser,
          city: "Bangkok",
          postal_code: 10320,
          number: cardNumber,
          expiration_month: Number(cardExpiry.split("/")[0]),
          expiration_year: Number(`20${cardExpiry.split("/")[1]}`),
          security_code: Number(cardCVV),
        },
      });

      return data;
    },
    onSuccess: (data) => {
      if (data?.object === "error") {
        Toast.show({
          type: "error",
          text1: "Error creating card",
          text2: data?.message || "An error occurred",
        });
        return;
      } else {
        addCard({
          id: Math.floor(Math.random() * 1000),
          cardUser,
          cardNumber,
          expiryDate: cardExpiry,
          cvv: cardCVV,
          omiseCardData: data,
        });
        navigation.goBack();
      }
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Error creating card",
        text2: error?.message || "An error occurred",
      });
    }
  });

  const handleCardNumberChange = (value: string) => {
    setCardNumber(formattedCreditCard(value));
  };

  const handleCardUserChange = (value: string) => {
    setCardUser(value);
  };

  const handleCardExpiryChange = (value: string) => {
    setCardExpiry(formattedExpiryDate(value));
  };

  const handleCardCVVChange = (value: string) => {
    setCardCVV(formattedCVV(value));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-1 justify-between">
        <View className="flex gap-4 p-6">
          <View className="flex gap-2">
            <Text style={styles.textTitle}>ATM/Debit/Credit card number</Text>
            <View className="flex-row items-center">
              <TextInput
                style={styles.textTitle}
                className="h-[56px] w-full min-w-[327px] rounded-md border-[1.5px] border-[#E6E3E6] p-5 text-base text-black"
                placeholder="0000 0000 0000 0000"
                inputMode="numeric"
                maxLength={19}
                value={cardNumber}
                onChangeText={handleCardNumberChange}
              />
              <View className="absolute right-4 flex flex-row gap-2">
                <Image source={require("../../assets/icons/visa_color.png")} />
                <Image
                  source={require("../../assets/icons/mastercard_color.png")}
                />
                <Image source={require("../../assets/icons/jcb_color.png")} />
              </View>
            </View>
          </View>
          <View className="flex gap-2">
            <Text style={styles.textTitle}>Name on Card</Text>
            <TextInput
              style={styles.textTitle}
              className="h-[56px] w-full min-w-[327px] rounded-md border-[1.5px] border-[#E6E3E6] p-5 text-base text-black"
              placeholder="Ty Lee"
              value={cardUser}
              onChangeText={handleCardUserChange}
            />
          </View>
          <View className="flex gap-2 flex-row justify-between pt-3">
            <View className="flex gap-2">
              <Text style={styles.textTitle}>Expiry date</Text>
              <TextInput
                style={styles.textTitle}
                className="h-[56px] w-full min-w-[154px] rounded-md border-[1.5px] border-[#E6E3E6] p-5 text-base text-black"
                placeholder="MM/YY"
                inputMode="numeric"
                maxLength={5}
                value={cardExpiry}
                onChangeText={handleCardExpiryChange}
              />
            </View>
            <View className="flex gap-2">
              <Text style={styles.textTitle}>CVV</Text>
              <TextInput
                style={styles.textTitle}
                className="h-[56px] w-full min-w-[154px] rounded-md border-[1.5px] border-[#E6E3E6] p-5 text-base text-black"
                placeholder="000"
                inputMode="numeric"
                maxLength={3}
                value={cardCVV}
                onChangeText={handleCardCVVChange}
              />
            </View>
          </View>
          <View className="flex items-center justify-center pt-8">
            <Image source={require("../../assets/images/secure_payment.png")} />
          </View>
        </View>
        <View className="flex items-center justify-center p-6">
          <Pressable
            onPress={() => createCardMutation()}
            className="flex h-12 w-full items-center justify-center rounded-md bg-[#FF3366]"
          >
            <Text style={styles.textTitle} className="text-lg text-white">
              Add Card
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  textTitle: {
    fontFamily: "FC-Subject-Rounded-Bold",
  },
};
