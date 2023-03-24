import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  Image,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

const DooCoinsScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const Verify = await DooCoinsAPIApi.getLoggedInUserGET(Constants);
        const email = Verify.email;
        if (!email) {
          return;
        }
        navigation.navigate('ChildlistScreen');
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Strong'] },
        dimensions.width
      )}
      scrollable={false}
      hasSafeArea={false}
    >
      {/* header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Strong'],
            height: '30%',
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth({ paddingTop: 50 }, dimensions.width)}
        >
          <Image
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 62,
                width: 79,
              }),
              dimensions.width
            )}
            resizeMode={'cover'}
            source={{
              uri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDk2MCA1NjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk2MCA1NjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMl8pO30KCS5zdDF7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KPGc+Cgk8ZGVmcz4KCQk8cmVjdCBpZD0iU1ZHSURfMV8iIHg9IjEyMy4zIiB5PSIxOC41IiB3aWR0aD0iNzAxLjQiIGhlaWdodD0iNTI3LjUiLz4KCTwvZGVmcz4KCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPgoJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+Cgk8L2NsaXBQYXRoPgoJPGcgY2xhc3M9InN0MCI+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI5MSwyODIuNWMwLTU4LjUtNDcuNC0xMDUuOS0xMDUuOS0xMDUuOWMtMTUuNywwLTMwLjYsMy40LTQ0LDkuNmMtMTEuNywyOS44LTE4LjIsNjIuNC0xOC4yLDk2LjQKCQkJYzAsMzQsNi40LDY2LjUsMTguMiw5Ni40YzEzLjQsNi4xLDI4LjMsOS42LDQ0LDkuNkMyNDMuNiwzODguNCwyOTEsMzQxLDI5MSwyODIuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTYwLjgsMTlDNDQ5LjMsMTksMzU0LDg4LjMsMzE1LjUsMTg2LjFjMTMuNC02LjEsMjguMy05LjYsNDQtOS42YzQ3LDAsODYuOCwzMC42LDEwMC43LDcyLjkKCQkJYzEzLjktNDIuMyw1My43LTcyLjksMTAwLjctNzIuOWM1OC41LDAsMTA1LjksNDcuNCwxMDUuOSwxMDUuOXMtNDcuNCwxMDUuOS0xMDUuOSwxMDUuOWMtNDcsMC04Ni44LTMwLjYtMTAwLjctNzIuOQoJCQljLTEzLjksNDIuMy01My43LDcyLjktMTAwLjcsNzIuOWMtMTUuNywwLTMwLjYtMy40LTQ0LTkuNkMzNTQsNDc2LjcsNDQ5LjMsNTQ2LDU2MC44LDU0NmMxNDUuNSwwLDI2My41LTExOCwyNjMuNS0yNjMuNQoJCQlDODI0LjMsMTM3LDcwNi4zLDE5LDU2MC44LDE5eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=',
            }}
          />
        </View>

        <View>
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Surface'],
                fontFamily: 'Roboto_400Regular',
                fontSize: 32,
                marginTop: 20,
              }),
              dimensions.width
            )}
          >
            {'DooCoins'}
          </Text>
        </View>
      </View>
      {/* body */}
      <View
        style={StyleSheet.applyWidth(
          { height: '50%', width: '100%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { backgroundColor: theme.colors['Strong'], width: '100%' },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Surface'],
                fontFamily: 'Roboto_400Regular',
                fontSize: 26,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Login'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: theme.colors['Strong'],
              marginTop: 20,
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* loginEmail */}
          <TextInput
            onChangeText={newLoginEmailValue => {
              try {
                setLoginEmail(newLoginEmailValue);
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
                  borderWidth: 2,
                  color: theme.colors['Light Inverse'],
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 26,
                  height: 50,
                  marginTop: 20,
                  textAlign: 'center',
                  width: '80%',
                }
              ),
              dimensions.width
            )}
            value={loginEmail}
            placeholder={'email'}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          {/* loginPassword */}
          <TextInput
            onChangeText={newLoginPasswordValue => {
              try {
                setLoginPassword(newLoginPasswordValue);
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
                  borderWidth: 2,
                  color: theme.colors['Light Inverse'],
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 26,
                  height: 50,
                  marginTop: 20,
                  textAlign: 'center',
                  width: '80%',
                }
              ),
              dimensions.width
            )}
            value={loginPassword}
            placeholder={'password'}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            secureTextEntry={true}
          />
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const loginResponseJson = await DooCoinsAPIApi.loginPOST(
                    Constants,
                    { loginEmail: loginEmail, loginPassword: loginPassword }
                  );
                  const authToken = loginResponseJson.authToken;
                  const message = loginResponseJson.message;
                  const parent_id = loginResponseJson.parent_id;
                  setGlobalVariableValue({
                    key: 'ERROR_MESSAGE',
                    value: message,
                  });
                  if (!authToken) {
                    return;
                  }
                  setGlobalVariableValue({
                    key: 'Parent_ID',
                    value: parent_id,
                  });
                  setGlobalVariableValue({
                    key: 'AUTHORIZATION_HEADER',
                    value: 'Bearer ' + authToken,
                  });
                  navigation.navigate('ChildlistScreen');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button 2'], {
                fontFamily: 'Roboto_400Regular',
                fontSize: 26,
                height: 50,
                marginTop: 20,
                width: '80%',
              }),
              dimensions.width
            )}
            title={'continue'}
          />
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Primary'],
                fontFamily: 'Roboto_700Bold',
                fontSize: 21,
                marginTop: 20,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'register'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Error'],
                fontFamily: 'Roboto_400Regular',
                fontSize: 20,
                marginTop: 20,
              }),
              dimensions.width
            )}
          >
            {Constants['ERROR_MESSAGE']}
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(DooCoinsScreen);
