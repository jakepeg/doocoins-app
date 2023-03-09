import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';

const WalletScreen = props => {
  const { theme } = props;

  return <ScreenContainer scrollable={false} hasSafeArea={false} />;
};

export default withTheme(WalletScreen);
