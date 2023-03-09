import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = props => {
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
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      {/* header */}
      <View style={styles(theme).Viewaf7ccb6d}>
        <View style={styles(theme).Viewb6a298a3}>
          <Image
            style={[
              GlobalStyles.ImageStyles(theme)['Image'],
              styles(theme).Image030b0ab4,
            ]}
            resizeMode={'cover'}
            source={{
              uri: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDk2MCA1NjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk2MCA1NjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMl8pO30KCS5zdDF7ZmlsbDojZmZmZmZmO30KPC9zdHlsZT4KPGc+Cgk8ZGVmcz4KCQk8cmVjdCBpZD0iU1ZHSURfMV8iIHg9IjEyMy4zIiB5PSIxOC41IiB3aWR0aD0iNzAxLjQiIGhlaWdodD0iNTI3LjUiLz4KCTwvZGVmcz4KCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPgoJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+Cgk8L2NsaXBQYXRoPgoJPGcgY2xhc3M9InN0MCI+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI5MSwyODIuNWMwLTU4LjUtNDcuNC0xMDUuOS0xMDUuOS0xMDUuOWMtMTUuNywwLTMwLjYsMy40LTQ0LDkuNmMtMTEuNywyOS44LTE4LjIsNjIuNC0xOC4yLDk2LjQKCQkJYzAsMzQsNi40LDY2LjUsMTguMiw5Ni40YzEzLjQsNi4xLDI4LjMsOS42LDQ0LDkuNkMyNDMuNiwzODguNCwyOTEsMzQxLDI5MSwyODIuNXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTYwLjgsMTlDNDQ5LjMsMTksMzU0LDg4LjMsMzE1LjUsMTg2LjFjMTMuNC02LjEsMjguMy05LjYsNDQtOS42YzQ3LDAsODYuOCwzMC42LDEwMC43LDcyLjkKCQkJYzEzLjktNDIuMyw1My43LTcyLjksMTAwLjctNzIuOWM1OC41LDAsMTA1LjksNDcuNCwxMDUuOSwxMDUuOXMtNDcuNCwxMDUuOS0xMDUuOSwxMDUuOWMtNDcsMC04Ni44LTMwLjYtMTAwLjctNzIuOQoJCQljLTEzLjksNDIuMy01My43LDcyLjktMTAwLjcsNzIuOWMtMTUuNywwLTMwLjYtMy40LTQ0LTkuNkMzNTQsNDc2LjcsNDQ5LjMsNTQ2LDU2MC44LDU0NmMxNDUuNSwwLDI2My41LTExOCwyNjMuNS0yNjMuNQoJCQlDODI0LjMsMTM3LDcwNi4zLDE5LDU2MC44LDE5eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=',
            }}
          />
        </View>

        <View>
          <Text
            style={[
              GlobalStyles.TextStyles(theme)['Text'],
              styles(theme).Textd8e51ce1,
            ]}
          >
            {'DooCoins'}
          </Text>
        </View>
      </View>
      {/* body */}
      <View style={styles(theme).View9e4682ce}>
        <View style={styles(theme).Viewb521eb49}>
          <Text
            style={[
              GlobalStyles.TextStyles(theme)['Text'],
              styles(theme).Textda554b21,
            ]}
          >
            {'Login'}
          </Text>
        </View>

        <View style={styles(theme).Viewcf512171}>
          {/* loginEmail */}
          <TextInput
            onChangeText={newLoginEmailValue => {
              try {
                setLoginEmail(newLoginEmailValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              GlobalStyles.TextInputStyles(theme)['Text Input'],
              styles(theme).TextInput4e7ee922,
            ]}
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
            style={[
              GlobalStyles.TextInputStyles(theme)['Text Input'],
              styles(theme).TextInput4e7ee922,
            ]}
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
                  setGlobalVariableValue({
                    key: 'ERROR_MESSAGE',
                    value: message,
                  });
                  if (!authToken) {
                    return;
                  }
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
            style={[
              GlobalStyles.ButtonStyles(theme)['Button 2'],
              styles(theme).Buttonc6389ac7,
            ]}
            title={'continue'}
          />
          <Text
            style={[
              GlobalStyles.TextStyles(theme)['Text'],
              styles(theme).Textea4c50a6,
            ]}
          >
            {'register'}
          </Text>

          <Text
            style={[
              GlobalStyles.TextStyles(theme)['Text'],
              styles(theme).Texte1a7dc0c,
            ]}
          >
            {Constants['ERROR_MESSAGE']}
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonc6389ac7: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
      height: 50,
      marginTop: 20,
      width: '80%',
    },
    Image030b0ab4: { height: 62, width: 79 },
    TextInput4e7ee922: {
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
    },
    Textd8e51ce1: {
      color: theme.colors['Surface'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 32,
      marginTop: 20,
    },
    Textda554b21: {
      color: theme.colors['Surface'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
      textAlign: 'center',
    },
    Texte1a7dc0c: {
      color: theme.colors['Error'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 20,
      marginTop: 20,
    },
    Textea4c50a6: {
      color: theme.colors['Primary'],
      fontFamily: 'Roboto_700Bold',
      fontSize: 21,
      marginTop: 20,
      textAlign: 'center',
    },
    View9e4682ce: { height: '50%', width: '100%' },
    Viewaf7ccb6d: {
      alignItems: 'center',
      backgroundColor: theme.colors['Strong'],
      height: '30%',
    },
    Viewb521eb49: { backgroundColor: theme.colors['Strong'], width: '100%' },
    Viewb6a298a3: { paddingTop: 50 },
    Viewcf512171: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: theme.colors['Strong'],
      marginTop: 20,
      width: '100%',
    },
    screen: { backgroundColor: theme.colors['Strong'] },
  });

export default withTheme(LoginScreen);
