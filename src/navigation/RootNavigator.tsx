import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "~/screens/Home";
import { Profile } from "~/screens/Profile";
import React from "react";

export type RouteParams = {
  Home: undefined;
  Profile: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
};
const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            animation: "slide_from_right",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
