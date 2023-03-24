import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
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
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const RewardsScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const humanReadableDate = time => {
    return new Date(time).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const updateBalance = (balance, value, plus_minus) => {
    if (plus_minus === '+') {
      balance += value;
    } else if (plus_minus === '-') {
      balance -= value;
    }

    return balance;
  };

  const { theme } = props;
  const { navigation } = props;

  const dooCoinsAPIAddTaskTransactionPOST =
    DooCoinsAPIApi.useAddTaskTransactionPOST();
  const dooCoinsAPIAddRewardPOST = DooCoinsAPIApi.useAddRewardPOST();

  const [reward_name, setReward_name] = React.useState('');
  const [reward_value, setReward_value] = React.useState(0);
  const [task_name, setTask_name] = React.useState('');
  const [task_value, setTask_value] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Background'] },
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
              alignItems: 'center',
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
          {/* Balance */}
          <>
            {!Constants['Child_ID'] ? null : (
              <DooCoinsAPIApi.FetchGetChildGET
                children_id={Constants['Child_ID']}
              >
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
                      <>
                        {!balanceData?.name ? null : (
                          <Text
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'],
                                {
                                  color: 'rgb(255, 255, 255)',
                                  fontFamily: 'Roboto_400Regular',
                                  fontSize: 32,
                                  marginBottom: 10,
                                  marginTop: 0,
                                  textAlign: 'center',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {balanceData?.name}
                          </Text>
                        )}
                      </>
                      <View
                        style={StyleSheet.applyWidth(
                          { flexDirection: 'row', justifyContent: 'center' },
                          dimensions.width
                        )}
                      >
                        <Image
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ImageStyles(theme)['Image'],
                              { height: 50, marginTop: 14, width: 50 }
                            ),
                            dimensions.width
                          )}
                          resizeMode={'cover'}
                          source={Images.DCSymbol}
                        />
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                color: 'rgb(255, 255, 255)',
                                fontFamily: 'Roboto_300Light',
                                fontSize: 66,
                              }
                            ),
                            dimensions.width
                          )}
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
        {/* Title */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Light'],
                fontFamily: 'Roboto_400Regular',
                fontSize: 24,
                marginLeft: 20,
                marginTop: 20,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Rewards'}
          </Text>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('RootNavigator');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginRight: 20, marginTop: 15 },
              dimensions.width
            )}
            color={theme.colors['Primary']}
            size={38}
            icon={'Ionicons/add-circle-outline'}
          />
        </View>
        {/* Rewards */}
        <View>
          {/* Rewards */}
          <DooCoinsAPIApi.FetchGetRewardsGET Child_ID={Constants['Child_ID']}>
            {({ loading, error, data, refetchGetRewards }) => {
              const rewardsData = data;
              if (!rewardsData || loading) {
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
                  data={rewardsData}
                  listKey={'Ib2oSSRC'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          const handler = async () => {
                            try {
                              await dooCoinsAPIAddTaskTransactionPOST.mutateAsync(
                                {
                                  Child_ID: Constants['Child_ID'],
                                  plus_minus: '-',
                                  transaction_name: listData?.name,
                                  transaction_value: listData?.value,
                                }
                              );
                              navigation.navigate('WalletScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          };
                          handler();
                        }}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              margin: 20,
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

                          <View
                            style={StyleSheet.applyWidth(
                              { flexDirection: 'row' },
                              dimensions.width
                            )}
                          >
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
                            <Icon
                              style={StyleSheet.applyWidth(
                                { marginLeft: 10 },
                                dimensions.width
                              )}
                              name={'Ionicons/checkmark-circle-sharp'}
                              color={theme.colors['Primary']}
                              size={28}
                            />
                          </View>
                        </View>
                      </Touchable>
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
          </DooCoinsAPIApi.FetchGetRewardsGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RewardsScreen);
