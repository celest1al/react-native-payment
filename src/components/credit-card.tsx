import { Text, View } from "react-native";

export function CreditCard() {
  return (
    <View style={styles.cardContainer} className="px-8 py-6 min-h-[180px] min-w-[332px]">
      <View className="max-w-[230px]">
        <Text className="text-3xl font-bold">Visa</Text>
        <View className="mt-4 flex gap-4 items-center justify-between flex-row">
          <Text className="text-lg text-[#808080]">••••</Text>
          <Text className="text-lg text-[#808080]">••••</Text>
          <Text className="text-lg text-[#808080]">••••</Text>
          <Text className="text-lg text-[#808080]">3282</Text>
        </View>
        <View className="flex gap"></View>
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
};
