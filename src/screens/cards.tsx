import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CreditCard } from "../components/credit-card";

interface CardsScreen {
  navigation: any;
}

export default function CardsScreen({ navigation }: CardsScreen) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <StatusBar />
      <View className="flex-row items-center justify-between px-4 pt-4">
        <Ionicons name="chevron-back" size={24} color="black" />
        <Text className="font-bold">Cards</Text>
        <Pressable>
          <Link href="/create-card">
            <Ionicons name="add" size={24} color="black" />
          </Link>
        </Pressable>
      </View> */}
      <View className="flex-1 gap-4 items-center justify-center">
        <Text className="text-[40px]">💳</Text>
        <Text className="text-black text-lg">No Cards Found</Text>
        <Text className="text-black text-center text-lg">
          We recommend adding a card {"\n"} for easy payment
        </Text>
        <Pressable onPress={() => navigation.navigate("create-card")}>
            <Text className="text-[#4AD8DA] font-medium text-lg">Add New Card</Text>
        </Pressable>
      </View>
      {/* <View className="flex-1 items-center gap-4 p-4 mt-4">
        <CreditCard />
      </View> */}
    </SafeAreaView>
  );
}
