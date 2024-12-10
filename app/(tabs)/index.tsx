import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UpdatesScreen from "../screens/UpdatesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabBarIcon from "../components/Tabs";
import ChatScreen from "../screens/ChatScreen";
import CallsScreen from "../screens/CallScreen";
import CommunityScreen from "../screens/CommunityScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#075E54" },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#b0bec5",
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon
            route={route.name}
            focused={focused}
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Tab.Screen name="Updates" component={UpdatesScreen} />
      <Tab.Screen name="Call" component={CallsScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
