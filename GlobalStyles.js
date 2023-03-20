import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ViewStyles = theme =>
  StyleSheet.create({
    AddChildForm: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: theme.colors['Strong'],
      marginTop: 20,
      width: '100%',
    },
    'AddChildForm 2': {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: theme.colors['Strong'],
      marginTop: 20,
      width: '100%',
    },
    Header: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
    'Button 2': {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { minHeight: 40 } });

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });

export const FlatListStyles = theme => StyleSheet.create({ List: { flex: 1 } });

export const SVGStyles = theme =>
  StyleSheet.create({ SVG: { height: 100, width: 100 } });

export const SwiperStyles = theme =>
  StyleSheet.create({ Swiper: { height: 300, width: '100%' } });

export const TextStyles = theme =>
  StyleSheet.create({ Text: { color: theme.colors.strong } });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    'Text Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });
