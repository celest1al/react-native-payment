import "./global.css";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CreateCardScreen } from "./src/screens/create-card";
import { CardsScreen } from "./src/screens/cards-list";
import { useFonts } from "expo-font";

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
  );
}
