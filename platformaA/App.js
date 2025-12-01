import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/login";
import Perfil from "./screens/perfil";
import HomeEscolar from "./screens/HomeEscolar"; // ⬅ nova tela

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">

        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="home"
          component={HomeEscolar}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}