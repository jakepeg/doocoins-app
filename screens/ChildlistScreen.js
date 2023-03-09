import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Button,
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
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ChildlistScreen = props => {
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
        if (email) {
          return;
        }
        navigation.navigate('LoginScreen');
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      {/* Header */}
      <View style={styles(theme).Viewf78a9190}>
        <Image
          style={[
            GlobalStyles.ImageStyles(theme)['Image'],
            styles(theme).Imagec4d7b6b4,
          ]}
          resizeMode={'cover'}
          source={Images.DooLogoWhite}
        />
        <Button
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'AUTHORIZATION_HEADER',
                value: '',
              });
              navigation.navigate('LoginScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            GlobalStyles.ButtonStyles(theme)['Button'],
            styles(theme).Button900795f6,
          ]}
          title={'Logout'}
        />
      </View>
      {/* Title */}
      <View>
        <Text
          style={[
            GlobalStyles.TextStyles(theme)['Text'],
            styles(theme).Text62985bff,
          ]}
        >
          {'My children'}
        </Text>
      </View>

      <Modal
        visible={Constants['Visible']}
        animationType={'slide'}
        presentationStyle={'fullScreen'}
      >
        <Text
          style={[
            GlobalStyles.TextStyles(theme)['Text'],
            styles(theme).Textbb873524,
          ]}
        >
          {'modal content'}
        </Text>
        <IconButton
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Visible',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          size={32}
          icon={'AntDesign/close'}
        />
      </Modal>
      {/* Child list */}
      <View>
        <DooCoinsAPIApi.FetchChildListGET>
          {({ loading, error, data, refetchChildList }) => {
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
              <FlatList
                data={fetchData}
                listKey={'MbWtQFGu'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <Touchable>
                      <View style={styles(theme).View79f747d2}>
                        {/* ChildName */}
                        <Text
                          style={[
                            GlobalStyles.TextStyles(theme)['Text'],
                            styles(theme).Text0759f2cf,
                          ]}
                        >
                          {listData?.name}
                        </Text>
                        {/* Balance */}
                        <Text
                          style={[
                            GlobalStyles.TextStyles(theme)['Text'],
                            styles(theme).Text9ff811ac,
                          ]}
                        >
                          {listData?.balance}
                        </Text>
                      </View>
                    </Touchable>
                  );
                }}
                style={GlobalStyles.FlatListStyles(theme)['List']}
                contentContainerStyle={
                  GlobalStyles.FlatListStyles(theme)['List']
                }
                numColumns={1}
                onEndReachedThreshold={0.5}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </DooCoinsAPIApi.FetchChildListGET>
      </View>
      {/* Plus button */}
      <View style={styles(theme).View3b240580}>
        <IconButton
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Visible',
                value: true,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).IconButton8c840908}
          size={50}
          icon={'Entypo/circle-with-plus'}
          color={theme.colors['Option_Selected_Color']}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button900795f6: {
      backgroundColor: '"rgba(0, 0, 0, 0)"',
      color: theme.colors['Light Inverse'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 12,
      height: 15,
      marginRight: 7,
      paddingTop: 10,
      textAlign: 'center',
      textDecorationLine: 'underline',
      width: 60,
    },
    IconButton8c840908: { marginBottom: 20 },
    Imagec4d7b6b4: { height: 20, marginLeft: 15, width: 30 },
    Text0759f2cf: {
      color: theme.colors['Light Inverse'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
    },
    Text62985bff: {
      color: theme.colors['Strong Inverse'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
      marginTop: 20,
      textAlign: 'center',
    },
    Text9ff811ac: {
      alignSelf: 'flex-start',
      color: theme.colors['Light Inverse'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
    },
    Textbb873524: { color: theme.colors['Light Inverse'] },
    View3b240580: {
      alignContent: 'flex-start',
      alignItems: 'center',
      bottom: 0,
      position: 'absolute',
      width: '100%',
    },
    View79f747d2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
    },
    Viewf78a9190: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    screen: { backgroundColor: theme.colors['Strong'] },
  });

export default withTheme(ChildlistScreen);
