import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {Icon, Text} from '@components';
import {
  FavoriteScreen,
  HomeScreen,
  ProfileScreen,
  NewPostScreen,
} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  FavoriteScreen: undefined;
  ProfileScreen: undefined;
  NewPostScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 20,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              semiBold
              preset="paragraphCaption"
              color={focused ? 'primary' : 'backgroundContrast'}>
              Início
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              color={focused ? 'primary' : 'backgroundContrast'}
              name={focused ? 'homeFill' : 'home'}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
