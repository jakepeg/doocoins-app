import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text } from 'react-native';

const RewardsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <Text
        style={[
          GlobalStyles.TextStyles(theme)['Text'],
          styles(theme).Text72eac86f,
        ]}
      >
        {'Rewards'}
      </Text>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Text72eac86f: {
      alignSelf: 'center',
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
      marginTop: 100,
    },
  });

export default withTheme(RewardsScreen);
