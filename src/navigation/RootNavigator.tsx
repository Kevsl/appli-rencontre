import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "~/screens/Home";
import { Profile } from "~/screens/Profile";
import React from "react";
import { tailwind } from "tailwind";

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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animation: "slide_from_right",
            headerStyle: tailwind("bg-indigo-400"),
            headerTintColor: "#FFF",
            headerTitleStyle: tailwind("text-xl"),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            animation: "slide_from_right",
            headerStyle: tailwind("bg-indigo-400"),
            headerTintColor: "#FFF",
            headerTitleStyle: tailwind("text-xl"),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
