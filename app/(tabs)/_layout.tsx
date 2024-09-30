import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import LogProvider from "@/components/LogContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <LogProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Log",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="create-sharp" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="file-tray-full-sharp" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="settings-sharp" color={color} />
            ),
          }}
        />
      </Tabs>
    </LogProvider>
  );
}
