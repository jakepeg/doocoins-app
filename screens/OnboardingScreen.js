import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  ScreenContainer,
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';

const OnboardingScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  const [child_name, setChild_name] = React.useState('child name or nickname');

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

      <Swiper
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.SwiperStyles(theme)['Swiper'], {
            height: '70%',
          }),
          dimensions.width
        )}
        dotColor={theme.colors.light}
        dotActiveColor={theme.colors.primary}
        dotsTouchable={true}
      >
        <SwiperItem>
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
              {'Kids rewards app\nbuilt on blockchain'}
            </Text>

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
              {'find out more'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Surface'],
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 26,
                  marginTop: 20,
                  textAlign: 'center',
                }),
                dimensions.width
              )}
            >
              {'Add a child to get started'}
            </Text>
          </View>
          {/* AddChildForm */}
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
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setChild_name(newTextInputValue);
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
                    textAlign: 'center',
                    width: '80%',
                  }
                ),
                dimensions.width
              )}
              value={child_name}
              autoCapitalize={'none'}
              placeholder={'Enter a value...'}
            />
            <Button
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 26,
                  height: 50,
                  marginTop: 20,
                  width: '80%',
                }),
                dimensions.width
              )}
              title={'add child'}
            />
          </View>
        </SwiperItem>
      </Swiper>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingScreen);
