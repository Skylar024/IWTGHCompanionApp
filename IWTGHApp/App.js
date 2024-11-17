import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import Home from "./components/Home";
import Ghosts from "./components/Ghosts";
import Lore_Pages from "./components/Lore_Pages";
import Characters from "./components/Characters";
import Maps from "./components/Maps";
import Tasks from "./components/Tasks";
import Box from "./components/Box";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS == "ios" && (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Ghosts" component={Ghosts} />
          <Tab.Screen name="Characters" component={Characters} />
          <Tab.Screen name="Lore Pages" component={Lore_Pages} />
          <Tab.Screen name="Maps" component={Maps} />
          <Tab.Screen name="Tasks" component={Tasks} />
        </Tab.Navigator>
      )}

      {Platform.OS == "android" && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Ghosts" component={Ghosts} />
          <Drawer.Screen name="Lore Pages" component={Lore_Pages} />
          <Drawer.Screen name="Characters" component={Characters} />
          <Tab.Screen name="Maps" component={Maps} />
          <Tab.Screen name="Tasks" component={Tasks} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}


