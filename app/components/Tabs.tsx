import React from "react";
import { Ionicons } from "@expo/vector-icons";

type TabBarIconProps = {
  route: string;
  focused: boolean;
  color: string;
  size: number;
};

export default function TabBarIcon({
  route,
  focused,
  color,
  size,
}: TabBarIconProps) {
  let iconName:
    | "albums"
    | "albums-outline"
    | "call"
    | "call-outline"
    | "people"
    | "people-outline"
    | "chatbubble"
    | "chatbubble-outline"
    | "cog"
    | "cog-outline";

  switch (route) {
    case "Updates":
      iconName = focused ? "albums" : "albums-outline";
      break;
    case "Call":
      iconName = focused ? "call" : "call-outline";
      break;
    case "Community":
        iconName= focused ? "people" : "people-outline";
        break;
    case "Chat":
      iconName = focused ? "chatbubble" : "chatbubble-outline";
      break;
    case "Settings":
      iconName = focused ? "cog" : "cog-outline";
      break;
    default:
      iconName = "chatbubble-outline";
  }

  return <Ionicons name={iconName} size={size} color={color} />;
}
