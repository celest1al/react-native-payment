import { Image, Text, View } from "react-native";
import type { Card } from "../types/card";
interface CreditCardProps {
  card: Card
}

type CardType = 'Visa' | 'MasterCard' | 'JCB';

const LOGO: Record<CardType, any>  = {
  Visa: require("../../assets/icons/visa_h16_color.png"),
  MasterCard: require("../../assets/icons/mastercard_high.png"),
  JCB: require("../../assets/icons/jcb_high.png"),
};

export function CreditCard({ card }: CreditCardProps) {
  const lastFourDigits = card?.cardNumber?.slice(-4);
  const cardType = card?.omiseCardData?.card?.brand as CardType ?? "Visa";

  const cardLogo = LOGO[cardType]

  return (
    <View
      style={styles.cardContainer}
      className="px-8 py-6 min-h-[180px] min-w-[332px]"
    >
      <View className="max-w-[230px]">
        <Image source={cardLogo} style={{
          width: 66,
          height: 23,
        }} />
        <View className="mt-4 flex gap-4 items-center justify-between flex-row">
          <Text
            style={styles.cardBullet}
            className="text-lg text-[#808080] font-medium"
          >
            ••••
          </Text>
          <Text
            style={styles.cardBullet}
            className="text-lg text-[#808080] font-medium"
          >
            ••••
          </Text>
          <Text
            style={styles.cardBullet}
            className="text-lg text-[#808080] font-medium"
          >
            ••••
          </Text>
          <Text style={styles.cardTitle} className="text-lg text-[#808080]">
            {lastFourDigits}
          </Text>
        </View>
        <View className="flex justify-between flex-row pt-8">
          <View className="flex gap-5">
            <Text
              style={styles.cardTitle}
              className="text-[0.625rem] text-[#8F8F8F]"
            >
              Name on Card
            </Text>
            <Text style={styles.cardTitle} className="text-sm font-medium">
              {card.cardUser}
            </Text>
          </View>
          <View className="flex gap-5">
            <Text
              style={styles.cardTitle}
              className="text-[0.625rem] text-[#8F8F8F]"
            >
              Expires
            </Text>
            <Text style={styles.cardTitle} className="text-sm font-medium">
              {card.expiryDate}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardBullet: {
    fontFamily: "Circular-Std-Medium",
  },
  cardTitle: {
    fontFamily: "FC-Subject-Rounded-Bold",
  },
  cardText: {
    fontFamily: "FC-Subject-Rounded-Regular",
  },
};
