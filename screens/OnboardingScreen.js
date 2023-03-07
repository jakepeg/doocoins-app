import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import {
  Button,
  ScreenContainer,
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const OnboardingScreen = props => {
  const { theme } = props;

  const [child_name, setChild_name] = React.useState('child name or nickname');

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

      <Swiper
        style={[
          GlobalStyles.SwiperStyles(theme)['Swiper'],
          styles(theme).Swiper501e2ed3,
        ]}
        dotColor={theme.colors.light}
        dotActiveColor={theme.colors.primary}
        dotsTouchable={true}
      >
        <SwiperItem>
          <View style={styles(theme).Viewb521eb49}>
            <Text
              style={[
                GlobalStyles.TextStyles(theme)['Text'],
                styles(theme).Textda554b21,
              ]}
            >
              {'Kids rewards app\nbuilt on blockchain'}
            </Text>

            <Text
              style={[
                GlobalStyles.TextStyles(theme)['Text'],
                styles(theme).Textea4c50a6,
              ]}
            >
              {'find out more'}
            </Text>

            <Text
              style={[
                GlobalStyles.TextStyles(theme)['Text'],
                styles(theme).Textdbde75f5,
              ]}
            >
              {'Add a child to get started'}
            </Text>
          </View>

          <View style={styles(theme).Viewcf512171}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setChild_name(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                styles(theme).TextInputaf0777f7,
              ]}
              value={child_name}
              autoCapitalize={'none'}
              placeholder={'Enter a value...'}
            />
            <Button
              style={[
                GlobalStyles.ButtonStyles(theme)['Button'],
                styles(theme).Buttonc6389ac7,
              ]}
              title={'add child'}
            />
          </View>
        </SwiperItem>
      </Swiper>
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
    Swiper501e2ed3: { height: '70%' },
    TextInputaf0777f7: {
      backgroundColor: theme.colors['Medium'],
      borderColor: theme.colors['Primary'],
      borderWidth: 2,
      color: theme.colors['Light Inverse'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
      height: 50,
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
    Textdbde75f5: {
      color: theme.colors['Surface'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
      marginTop: 20,
      textAlign: 'center',
    },
    Textea4c50a6: {
      color: theme.colors['Primary'],
      fontFamily: 'Roboto_700Bold',
      fontSize: 21,
      marginTop: 20,
      textAlign: 'center',
    },
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

export default withTheme(OnboardingScreen);
