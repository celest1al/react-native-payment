import "./global.css";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CardsScreen from "./src/screens/cards";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CreateCardScreen } from "./src/screens/create-card";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="cards"
          component={CardsScreen}
          options={{
            headerShadowVisible: false,
            headerRight: () => (
              <Pressable>
                <Ionicons name="add" size={24} color="black" />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen
          name="create-card"
          component={CreateCardScreen}
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerLeft: () => (
              <Pressable>
                <Ionicons name="chevron-back" size={24} color="black" />
              </Pressable>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
