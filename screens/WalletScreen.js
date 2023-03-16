import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const WalletScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      {/* Header */}
      <View
        style={[
          GlobalStyles.ViewStyles(theme)['Header'],
          styles(theme).View627b952a,
        ]}
      >
        {/* Logo */}
        <Image
          style={[
            GlobalStyles.ImageStyles(theme)['Image'],
            styles(theme).Imagec4d7b6b4,
          ]}
          resizeMode={'cover'}
          source={Images.DooLogoWhite}
        />
        {/* Settings */}
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('SettingsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).IconButton2be0f685}
          icon={'Ionicons/settings-sharp'}
          color={theme.colors['White']}
          size={24}
        />
      </View>
      {/* Balance */}
      <>
        {!Constants['Child_ID'] ? null : (
          <DooCoinsAPIApi.FetchGetChildGET children_id={Constants['Child_ID']}>
            {({ loading, error, data, refetchGetChild }) => {
              const balanceData = data;
              if (!balanceData || loading) {
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
                    {!balanceData?.name ? null : (
                      <Text
                        style={[
                          GlobalStyles.TextStyles(theme)['Text'],
                          styles(theme).Text5b465090,
                        ]}
                      >
                        {balanceData?.name}
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
                      {balanceData?.balance}
                    </Text>
                  </View>
                </View>
              );
            }}
          </DooCoinsAPIApi.FetchGetChildGET>
        )}
      </>
      {/* Transactions */}
      <DooCoinsAPIApi.FetchGetTransactionsGET child_id={Constants['Child_ID']}>
        {({ loading, error, data, refetchGetTransactions }) => {
          const transactionsData = data;
          if (!transactionsData || loading) {
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
            <FlatList
              data={transactionsData}
              listKey={'R64IJv2V'}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View>
                    {/* Date */}
                    <Text style={GlobalStyles.TextStyles(theme)['Text']}>
                      {new Date(listData?.created_at)}
                    </Text>
                    {/* Name */}
                    <>
                      {!listData?.name ? null : (
                        <Text style={GlobalStyles.TextStyles(theme)['Text']}>
                          {'Double click me to edit 👀'}
                        </Text>
                      )}
                    </>
                    {/* Plus_Minus */}
                    <>
                      {!listData?.plus_minus ? null : (
                        <Text style={GlobalStyles.TextStyles(theme)['Text']}>
                          {'Double click me to edit 👀'}
                        </Text>
                      )}
                    </>
                    {/* Value */}
                    <>
                      {!listData?.value ? null : (
                        <Text style={GlobalStyles.TextStyles(theme)['Text']}>
                          {'Double click me to edit 👀'}
                        </Text>
                      )}
                    </>
                  </View>
                );
              }}
              style={GlobalStyles.FlatListStyles(theme)['List']}
              contentContainerStyle={GlobalStyles.FlatListStyles(theme)['List']}
              numColumns={1}
              onEndReachedThreshold={0.5}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </DooCoinsAPIApi.FetchGetTransactionsGET>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    IconButton2be0f685: { right: 10, top: 3 },
    Imagebb75def3: { height: 50, marginTop: 14, width: 50 },
    Imagec4d7b6b4: { height: 20, marginLeft: 15, width: 30 },
    Text3fb33371: {
      color: 'rgb(255, 255, 255)',
      fontFamily: 'Roboto_300Light',
      fontSize: 66,
    },
    Text5b465090: {
      color: 'rgb(255, 255, 255)',
      fontFamily: 'Roboto_400Regular',
      fontSize: 32,
      marginBottom: 10,
      marginTop: 25,
      textAlign: 'center',
    },
    View627b952a: {
      alignItems: 'center',
      backgroundColor: theme.colors['Strong'],
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 0,
      paddingTop: 10,
    },
    View863e7c01: { flexDirection: 'row', justifyContent: 'center' },
    Viewd642e67a: {
      backgroundColor: theme.colors['Strong'],
      height: 170,
      width: '100%',
    },
  });

export default withTheme(WalletScreen);
