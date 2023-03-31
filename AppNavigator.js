import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AddRewardScreen from './screens/AddRewardScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import ChildlistScreen from './screens/ChildlistScreen';
import DooCoinsScreen from './screens/DooCoinsScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import RegisterScreen from './screens/RegisterScreen';
import RewardsScreen from './screens/RewardsScreen';
import SettingsScreen from './screens/SettingsScreen';
import TasksScreen from './screens/TasksScreen';
import WalletScreen from './screens/WalletScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="WalletScreen"
      tabBarOptions={{
        adaptive: false,
        activeTintColor: theme.colors['Primary'],
        inactiveTintColor: theme.colors['Background'],
        labelStyle: theme.typography.custom27,
        style: {
          backgroundColor: '"rgba(0, 0, 0, 0)"',
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{
          title: 'Wallet',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/wallet-outline"
              size={25}
              color={
                focused ? theme.colors['Primary'] : theme.colors['Background']
              }
            />
          ),
          tabBarLabel: 'wallet',
        }}
      />
      <Tab.Screen
        name="TasksScreen"
        component={TasksScreen}
        options={{
          title: 'Tasks',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/md-list"
              size={25}
              color={
                focused ? theme.colors['Primary'] : theme.colors['Background']
              }
            />
          ),
          tabBarLabel: 'tasks',
        }}
      />
      <Tab.Screen
        name="RewardsScreen"
        component={RewardsScreen}
        options={{
          title: 'Rewards',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/star-outline"
              size={25}
              color={
                focused ? theme.colors['Primary'] : theme.colors['Background']
              }
            />
          ),
          tabBarLabel: 'rewards',
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="DooCoinsScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors['Strong'],
            borderBottomColor: 'transparent',
          },
          cardStyle: {
            backgroundColor: theme.colors['Strong'],
          },
          headerTintColor: theme.colors['Strong'],
        }}
      >
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{
            title: 'Onboarding',
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Register',
          }}
        />
        <Stack.Screen
          name="DooCoinsScreen"
          component={DooCoinsScreen}
          options={{
            title: 'DooCoins',
          }}
        />
        <Stack.Screen
          name="ChildlistScreen"
          component={ChildlistScreen}
          options={{
            title: 'Childlist',
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: 'Settings',
          }}
        />
        <Stack.Screen
          name="AddRewardScreen"
          component={AddRewardScreen}
          options={{
            title: 'AddReward',
          }}
        />
        <Stack.Screen
          name="AddTaskScreen"
          component={AddTaskScreen}
          options={{
            title: 'AddTask',
          }}
        />
        <Stack.Screen name="BottomNav" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
