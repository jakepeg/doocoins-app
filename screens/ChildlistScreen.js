import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ChildlistScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const dooCoinsAPIAddChildPOST = DooCoinsAPIApi.useAddChildPOST();

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

  const [new_child, setNew_child] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

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
              setGlobalVariableValue({
                key: 'Parent_ID',
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
      {/* Child list */}
      <View>
        <DooCoinsAPIApi.FetchGetChildrenGET Parent_ID={Constants['Parent_ID']}>
          {({ loading, error, data, refetchGetChildren }) => {
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
              <ScrollView
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                bounces={true}
              >
                <FlatList
                  data={fetchData}
                  listKey={'MbWtQFGu'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            setGlobalVariableValue({
                              key: 'Child_ID',
                              value: listData?.id,
                            });
                            navigation.navigate('BottomNav');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
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
              </ScrollView>
            );
          }}
        </DooCoinsAPIApi.FetchGetChildrenGET>
      </View>
      {/* AddChildForm */}
      <View style={GlobalStyles.ViewStyles(theme)['AddChildForm']}>
        {/* Add child */}
        <Text
          style={[
            GlobalStyles.TextStyles(theme)['Text'],
            styles(theme).Text1cea83d9,
          ]}
        >
          {'Add a child'}
        </Text>
        {/* child_name */}
        <TextInput
          onChangeText={newChildNameValue => {
            try {
              setNew_child(newChildNameValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            GlobalStyles.TextInputStyles(theme)['Text Input'],
            styles(theme).TextInputaf0777f7,
          ]}
          value={new_child}
          placeholder={'child name'}
          autoCapitalize={'none'}
          clearTextOnFocus={true}
          textContentType={'givenName'}
          clearButtonMode={'never'}
        />
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                await dooCoinsAPIAddChildPOST.mutateAsync({
                  Parent_ID: Constants['Parent_ID'],
                  new_child: new_child,
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={[
            GlobalStyles.ButtonStyles(theme)['Button'],
            styles(theme).Buttonc6389ac7,
          ]}
          title={'add child'}
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
    Buttonc6389ac7: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
      height: 50,
      marginTop: 20,
      width: '80%',
    },
    Imagec4d7b6b4: { height: 20, marginLeft: 15, width: 30 },
    Text0759f2cf: {
      color: theme.colors['Light Inverse'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
    },
    Text1cea83d9: {
      color: theme.colors['Strong Inverse'],
      fontFamily: 'Roboto_400Regular',
      fontSize: 26,
      margin: 20,
      textAlign: 'center',
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
