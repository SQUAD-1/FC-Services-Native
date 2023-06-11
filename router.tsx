import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ViewCallRequest } from "./src/pages/ViewCallRequest";
import { OpenCallRequest } from "./src/pages/OpenCallRequest";

export const Router = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Abrir Chamado"
            component={OpenCallRequest}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chamado"
            component={ViewCallRequest}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}