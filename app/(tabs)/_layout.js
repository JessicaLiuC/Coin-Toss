import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import HouseSvg from '@/assets/dist/House.js';
import AirplaneTilt from '@/assets/dist/AirplaneTilt.js'
import UserCircle from '@/assets/dist/UserCircle.js'


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        // headerStyle: {
        //   backgroundColor: 'white', // Set the background color of the top bar to white
        // },
        headerTintColor: Colors[colorScheme ?? 'light'].text, // Set the text color of the top bar
        tabBarStyle: {
          backgroundColor: 'white', // Set the background color of the navigation bar to white
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HouseSvg name="code" color={color} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? 'light'].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Plan a trip',
          tabBarIcon: ({ color }) => <AirplaneTilt name="code" color={color} width={32} height={32}/>,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <UserCircle name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
