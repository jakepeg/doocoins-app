import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DooCoinsAPIApi from '../apis/DooCoinsAPIApi.js';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const LoggedinScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <DooCoinsAPIApi.FetchGetLoggedInUserGET>
        {({ loading, error, data, refetchGetLoggedInUser }) => {
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
            <View>
              <>
                {!fetchData?.email ? null : (
                  <Text style={GlobalStyles.TextStyles(theme)['Text']}>
                    {fetchData?.email}
                  </Text>
                )}
              </>
              <>
                {!fetchData?.name ? null : (
                  <Text
                    style={[
                      GlobalStyles.TextStyles(theme)['Text'],
                      styles(theme).Text0faf2f51,
                    ]}
                  >
                    {fetchData?.name}
                  </Text>
                )}
              </>
              <Button
                style={GlobalStyles.ButtonStyles(theme)['Button']}
                title={'Logout'}
              />
            </View>
          );
        }}
      </DooCoinsAPIApi.FetchGetLoggedInUserGET>
    </ScreenContainer>
  );
};

const styles = theme => StyleSheet.create({ Text0faf2f51: { marginTop: 100 } });

export default withTheme(LoggedinScreen);
