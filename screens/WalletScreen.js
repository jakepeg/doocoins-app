import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const WalletScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const humanReadableDate = time => {
    return new Date(time).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Background'], position: 'relative' },
        dimensions.width
      )}
      scrollable={false}
      hasSafeArea={false}
    >
      {/* Header */}
      <View>
        {/* TopNav */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['Header'], {
              alignItems: 'flex-start',
              backgroundColor: theme.colors['Strong'],
              marginTop: 0,
              paddingTop: 40,
            }),
            dimensions.width
          )}
        >
          {/* Logo */}
          <Image
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 20,
                marginLeft: 15,
                width: 30,
              }),
              dimensions.width
            )}
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
            style={StyleSheet.applyWidth(
              { right: 10, top: 3 },
              dimensions.width
            )}
            icon={'Ionicons/settings-sharp'}
            color={theme.colors['White']}
            size={24}
          />
        </View>
        {/* Ballance */}
        <View>
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Strong'],
                height: 140,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: 'rgb(255, 255, 255)',
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 32,
                  marginBottom: 10,
                  marginTop: 0,
                  textAlign: 'center',
                }),
                dimensions.width
              )}
            >
              {Constants['Child_Name']}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'center' },
                dimensions.width
              )}
            >
              <Image
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                    height: 50,
                    marginTop: 14,
                    width: 50,
                  }),
                  dimensions.width
                )}
                resizeMode={'cover'}
                source={Images.DCSymbol}
              />
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: 'rgb(255, 255, 255)',
                    fontFamily: 'Roboto_300Light',
                    fontSize: 66,
                  }),
                  dimensions.width
                )}
              >
                {Constants['Balance']}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Body */}
      <ScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { backgroundColor: theme.colors['Background'], flex: 1 },
          dimensions.width
        )}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Goal */}
        <>
          {!Constants['Reward_ID'] ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['White'],
                  borderRadius: 10,
                  borderStyle: 'solid',
                  flexDirection: 'row',
                  height: 160,
                  justifyContent: 'space-between',
                  margin: 20,
                  padding: 20,
                },
                dimensions.width
              )}
            >
              {/* Left col */}
              <View>
                <>
                  {!Constants['Reward_ID'] ? null : (
                    <DooCoinsAPIApi.FetchGetGoalGET
                      rewards_id={Constants['Reward_ID']}
                      onData={fetchData => {
                        try {
                          setGlobalVariableValue({
                            key: 'Goal_Name',
                            value: fetchData?.name,
                          });
                          setGlobalVariableValue({
                            key: 'Goal_Value',
                            value: fetchData?.value,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      {({ loading, error, data, refetchGetGoal }) => {
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
                          <>
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 22,
                                    marginBottom: 5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {Constants['Child_Name']}
                              {"'s Goal"}
                            </Text>
                            {/* GoalName */}
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 22,
                                    marginBottom: 5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {fetchData?.name}
                            </Text>
                            {/* GoalValue */}
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 22,
                                    marginBottom: 5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Target '}
                              {fetchData?.value}
                            </Text>

                            <Touchable>
                              <Text
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      color: theme.colors['Primary'],
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 22,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Change goal'}
                              </Text>
                            </Touchable>
                          </>
                        );
                      }}
                    </DooCoinsAPIApi.FetchGetGoalGET>
                  )}
                </>
              </View>
              <Utils.CustomCodeErrorBoundary>
                <CustomCode.GoalProgress />
              </Utils.CustomCodeErrorBoundary>
            </View>
          )}
        </>
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: theme.colors['Light'],
              fontFamily: 'Roboto_400Regular',
              fontSize: 24,
              margin: 20,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Transactions'}
        </Text>
        {/* Transactions */}
        <View>
          {/* Transactions */}
          <DooCoinsAPIApi.FetchGetTransactionsGET
            child_id={Constants['Child_ID']}
          >
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
                  listKey={'3mib1bzO'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginBottom: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            marginTop: 10,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Date */}
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                alignSelf: 'flex-start',
                                color: theme.colors['Light'],
                                fontFamily: 'Roboto_400Regular',
                                fontSize: 18,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {humanReadableDate(listData?.created_at)}
                        </Text>

                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Name */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'flex-start',
                                flexDirection: 'row',
                              },
                              dimensions.width
                            )}
                          >
                            {/* Name */}
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    alignSelf: 'flex-start',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 24,
                                    textAlign: 'left',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {listData?.name}
                            </Text>
                          </View>
                          {/* Amount */}
                          <View
                            style={StyleSheet.applyWidth(
                              { flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
                            {/* Plus_Minus */}
                            <>
                              {!listData?.plus_minus ? null : (
                                <Text
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text'],
                                      {
                                        fontFamily: 'Roboto_400Regular',
                                        fontSize: 24,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {listData?.plus_minus}
                                </Text>
                              )}
                            </>
                            {/* Value */}
                            <Text
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 24,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {listData?.value}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  }}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.FlatListStyles(theme)['List'],
                    dimensions.width
                  )}
                  contentContainerStyle={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.FlatListStyles(theme)['List'],
                      { alignSelf: 'stretch', flexDirection: 'column' }
                    ),
                    dimensions.width
                  )}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  inverted={true}
                />
              );
            }}
          </DooCoinsAPIApi.FetchGetTransactionsGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(WalletScreen);
