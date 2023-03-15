import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      {/* Header */}
      <View>
        <IconButton
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          size={32}
          icon={'Ionicons/close'}
        />
      </View>
      <View />
      {/* Child list */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('ChildlistScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View style={styles(theme).Viewb1bb98cf}>
          <IconButton size={32} icon={'Ionicons/people'} />
          <Text
            style={[
              GlobalStyles.TextStyles(theme)['Text'],
              styles(theme).Text73383357,
            ]}
          >
            {'My Children'}
          </Text>
        </View>
      </Touchable>
      {/* Logout */}
      <Touchable
        onPress={() => {
          try {
            setGlobalVariableValue({
              key: 'AUTHORIZATION_HEADER',
              value: '',
            });
            setGlobalVariableValue({
              key: 'Parent_ID',
              value: '',
            });
            navigation.navigate('LoginScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View style={styles(theme).Viewb1bb98cf}>
          <IconButton size={32} icon={'Ionicons/log-out-outline'} />
          <Text
            style={[
              GlobalStyles.TextStyles(theme)['Text'],
              styles(theme).Text73383357,
            ]}
          >
            {'Logout'}
          </Text>
        </View>
      </Touchable>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Text73383357: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 20,
      marginLeft: 20,
    },
    Viewb1bb98cf: { alignItems: 'center', flexDirection: 'row', margin: 20 },
  });

export default withTheme(SettingsScreen);
