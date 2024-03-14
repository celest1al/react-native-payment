import { SafeAreaView, Text, View } from "react-native";

export function CreateCardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 gap-4 items-center justify-center font-medium">
        <Text className="text-[40px]">Create cards</Text>
      </View>
    </SafeAreaView>
  );
}
