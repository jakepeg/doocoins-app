import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
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
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const TasksScreen = props => {
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

  const [task_name, setTask_name] = React.useState('');
  const [task_value, setTask_value] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Background'],
          height: '100%',
          minHeight: '100%',
        },
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
            {'Tasks'}
          </Text>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('AddTaskScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginRight: 20, marginTop: 15 },
              dimensions.width
            )}
            icon={'Ionicons/add-circle-outline'}
            size={38}
          />
        </View>
        {/* Tasks */}
        <View>
          {/* Tasks */}
          <DooCoinsAPIApi.FetchGetTasksGET child_id={Constants['Child_ID']}>
            {({ loading, error, data, refetchGetTasks }) => {
              const tasksData = data;
              if (!tasksData || loading) {
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
                  data={tasksData}
                  listKey={'AbcVHTYh'}
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
                                  plus_minus: '+',
                                  transaction_name: listData?.name,
                                  transaction_value: listData?.value,
                                }
                              );
                              const New_Balance = updateBalance(
                                Constants['Balance'],
                                listData?.value,
                                '+'
                              );
                              setGlobalVariableValue({
                                key: 'Balance',
                                value: New_Balance,
                              });
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
                              marginBottom: 10,
                              marginLeft: 20,
                              marginRight: 20,
                              marginTop: 20,
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
          </DooCoinsAPIApi.FetchGetTasksGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(TasksScreen);
