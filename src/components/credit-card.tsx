import { Text, View } from "react-native";

export function CreditCard() {
  return (
    <View
      style={styles.cardContainer}
      className="px-8 py-6 min-h-[180px] min-w-[332px]"
    >
      <View className="max-w-[230px]">
        <Text className="text-3xl font-bold">Visa</Text>
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
            3282
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
              Ty Lee
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
              12/25
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
