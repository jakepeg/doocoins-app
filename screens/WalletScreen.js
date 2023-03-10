import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const WalletScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <View>
        <Text
          style={[
            GlobalStyles.TextStyles(theme)['Text'],
            styles(theme).Textec108e08,
          ]}
        >
          {'parent id = '}
          {null}
        </Text>
        <Button
          onPress={() => {
            try {
              navigation.navigate('ChildlistScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            GlobalStyles.ButtonStyles(theme)['Button'],
            styles(theme).Buttonffb3e65c,
          ]}
          title={'Child list'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonffb3e65c: { margin: 50 },
    Textec108e08: {
      color: theme.colors['Error'],
      fontFamily: 'Roboto_400Regular',
      marginTop: 100,
      textAlign: 'center',
    },
  });

export default withTheme(WalletScreen);
