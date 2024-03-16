import "./global.css";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CreateCardScreen } from "./src/screens/create-card-screen";
import { CardsScreen } from "./src/screens/cards-list-screen";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message"

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Circular-Std-Medium": require("./assets/fonts/circular-std-medium.ttf"),
    "FC-Subject-Rounded-Bold": require("./assets/fonts/FC-Subject-Rounded-Bold.ttf"),
    "FC-Subject-Rounded-Regular": require("./assets/fonts/FC-Subject-Rounded-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="cards"
            component={CardsScreen}
            options={({ navigation }) => ({
              headerTitle: "Cards",
              headerShadowVisible: false,
              headerLeft: () => (
                <Pressable>
                  <Ionicons name="chevron-back" size={24} color="black" />
                </Pressable>
              ),
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate("create-card")}>
                  <Ionicons name="add" size={24} color="black" />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="create-card"
            component={CreateCardScreen}
            options={({ navigation }) => ({
              headerTitle: "",
              headerShadowVisible: false,
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={24} color="black" />
                </Pressable>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </QueryClientProvider>
  );
}
