import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const WalletScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <>
        {!Constants['Child_ID'] ? null : (
          <DooCoinsAPIApi.FetchGetChildGET children_id={Constants['Child_ID']}>
            {({ loading, error, data, refetchGetChild }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <View style={styles(theme).Viewd642e67a}>
                  <>
                    {!fetchData?.name ? null : (
                      <Text
                        style={[
                          GlobalStyles.TextStyles(theme)['Text'],
                          styles(theme).Text5e45f235,
                        ]}
                      >
                        {fetchData?.name}
                      </Text>
                    )}
                  </>
                  <View style={styles(theme).View863e7c01}>
                    <Image
                      style={[
                        GlobalStyles.ImageStyles(theme)['Image'],
                        styles(theme).Imagebb75def3,
                      ]}
                      resizeMode={'cover'}
                      source={Images.DCSymbol}
                    />
                    <Text
                      style={[
                        GlobalStyles.TextStyles(theme)['Text'],
                        styles(theme).Text3fb33371,
                      ]}
                    >
                      {fetchData?.balance}
                    </Text>
                  </View>
                </View>
              );
            }}
          </DooCoinsAPIApi.FetchGetChildGET>
        )}
      </>
      <View>
        <Text
          style={[
            GlobalStyles.TextStyles(theme)['Text'],
            styles(theme).Textec108e08,
          ]}
        >
          {'parent id = '}
          {Constants['Parent_ID']}
        </Text>

        <Text
          style={[
            GlobalStyles.TextStyles(theme)['Text'],
            styles(theme).Textec108e08,
          ]}
        >
          {'child id = '}
          {Constants['Child_ID']}
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
    Imagebb75def3: { height: 50, marginTop: 14, width: 50 },
    Text3fb33371: {
      color: 'rgb(255, 255, 255)',
      fontFamily: 'Roboto_300Light',
      fontSize: 66,
    },
    Text5e45f235: {
      color: 'rgb(255, 255, 255)',
      fontFamily: 'Roboto_400Regular',
      fontSize: 24,
      marginBottom: 10,
      marginTop: 25,
      textAlign: 'center',
    },
    Textec108e08: {
      color: theme.colors['Error'],
      fontFamily: 'Roboto_400Regular',
      marginTop: 100,
      textAlign: 'center',
    },
    View863e7c01: { flexDirection: 'row', justifyContent: 'center' },
    Viewd642e67a: {
      backgroundColor: theme.colors['Strong'],
      height: 170,
      width: '100%',
    },
  });

export default withTheme(WalletScreen);
