import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const SettingsScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      {/* Header */}
      <View style={StyleSheet.applyWidth({ paddingTop: 30 }, dimensions.width)}>
        <IconButton
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ marginLeft: 20 }, dimensions.width)}
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
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', margin: 20 },
            dimensions.width
          )}
        >
          <IconButton size={32} icon={'Ionicons/people'} />
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'Roboto_400Regular',
                fontSize: 20,
                marginLeft: 20,
              }),
              dimensions.width
            )}
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
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', margin: 20 },
            dimensions.width
          )}
        >
          <IconButton size={32} icon={'Ionicons/log-out-outline'} />
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                fontFamily: 'Roboto_400Regular',
                fontSize: 20,
                marginLeft: 20,
              }),
              dimensions.width
            )}
          >
            {'Logout'}
          </Text>
        </View>
      </Touchable>
    </ScreenContainer>
  );
};

export default withTheme(SettingsScreen);
