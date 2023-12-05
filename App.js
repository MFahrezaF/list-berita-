import React, { Component } from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Berita from "./screens/listberita";
import Detailberita from "./screens/detailberita";
import Home from "./screens/home";

const Stack = createNativeStackNavigator();

class App extends Component {
  headerStyle = {
    headerTitleStyle: { color: "#1F1717" },
    headerStyle: {
      backgroundColor: "#87C4FF",
      
    },
    headerTintColor: "#000000",
  };

  render() {
    return (
      <NavigationContainer>
        <StatusBar style="auto" backgroundColor="#000000" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              ...this.headerStyle,
            }}
          />
          <Stack.Screen
            name="Berita"
            component={Berita}
            options={{
              title: "List berita",
              ...this.headerStyle,
            }}
          />
          <Stack.Screen
            name="Detailberita"
            component={Detailberita}
            options={{
              title: "Detail berita",
              ...this.headerStyle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
