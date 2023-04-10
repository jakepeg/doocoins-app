import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

const AddRewardScreen = props => {
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

  const dooCoinsAPIAddRewardPOST = DooCoinsAPIApi.useAddRewardPOST();

  const [reward_name, setReward_name] = React.useState('');
  const [reward_value, setReward_value] = React.useState('');
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
            color={theme.colors['White']}
            size={24}
            icon={'Ionicons/person-sharp'}
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
          { backgroundColor: theme.colors['Strong'], flex: 1 },
          dimensions.width
        )}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: theme.colors['Background'],
              fontFamily: 'Roboto_400Regular',
              fontSize: 24,
              marginLeft: 20,
              marginTop: 20,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Add a reward'}
        </Text>
        {/* Add task */}
        <View
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['AddChildForm 2'],
              {
                backgroundColor: '"rgba(0, 0, 0, 0)"',
                flexDirection: 'column',
                justifyContent: 'center',
              }
            ),
            dimensions.width
          )}
        >
          {/* Reward name */}
          <TextInput
            onChangeText={newRewardNameValue => {
              try {
                setReward_name(newRewardNameValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                {
                  backgroundColor: theme.colors['Medium'],
                  borderColor: theme.colors['Primary'],
                  borderWidth: 1,
                  color: theme.colors['Background'],
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 24,
                  height: 50,
                  margin: 10,
                  textAlign: 'center',
                  width: '80%',
                }
              ),
              dimensions.width
            )}
            value={reward_name}
            placeholder={'reward name'}
            autoCapitalize={'none'}
            placeholderTextColor={theme.colors['Light']}
            clearTextOnFocus={true}
          />
          {/* Reward value */}
          <TextInput
            onChangeText={newRewardValueValue => {
              try {
                setReward_value(newRewardValueValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                {
                  backgroundColor: theme.colors['Medium'],
                  borderColor: theme.colors['Primary'],
                  borderWidth: 1,
                  color: theme.colors['Background'],
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 24,
                  height: 50,
                  margin: 10,
                  textAlign: 'center',
                  width: '80%',
                }
              ),
              dimensions.width
            )}
            value={reward_value}
            placeholder={'value'}
            autoCapitalize={'none'}
            placeholderTextColor={theme.colors['Light']}
            clearTextOnFocus={true}
          />
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  await dooCoinsAPIAddRewardPOST.mutateAsync({
                    Child_ID: Constants['Child_ID'],
                    reward_name: reward_name,
                    reward_value: reward_value,
                  });
                  navigation.navigate('BottomNav', { screen: 'RewardsScreen' });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                fontFamily: 'Roboto_300Light',
                fontSize: 24,
                height: 50,
                margin: 10,
                width: '80%',
              }),
              dimensions.width
            )}
            title={'add'}
          />
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('BottomNav', { screen: 'RewardsScreen' });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Primary'],
                  fontFamily: 'Roboto_700Bold',
                  fontSize: 21,
                  margin: 20,
                }),
                dimensions.width
              )}
            >
              {'cancel'}
            </Text>
          </Touchable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AddRewardScreen);
