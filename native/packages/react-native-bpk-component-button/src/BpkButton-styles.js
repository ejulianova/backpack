import { Platform } from 'react-native';

const IOS_TOKENS = require('bpk-tokens/tokens/ios/base.react.native.common.js');
const ANDROID_TOKENS = require('bpk-tokens/tokens/android/base.react.native.common.js');

const tokens = Platform.select({
  ios: () => IOS_TOKENS,
  android: () => ANDROID_TOKENS,
})();

const styles = {
  base: {
    underlayColor: 'rgba(0, 0, 0, 0.15)',
    text: {
      backgroundColor: 'transparent',
      color: tokens.colorWhite,
      fontSize: tokens.textSmFontSize,
      fontWeight: '600', // TODO tokenize
      textAlign: 'center',
    },
    container: {
      borderRadius: 100,
    },
    button: {
      borderRadius: 100,
      paddingTop: tokens.spacingMd,
      paddingBottom: tokens.spacingMd,
      paddingLeft: tokens.spacingLg,
      paddingRight: tokens.spacingLg,
    },
  },
  large: {
    text: {
      fontSize: tokens.textLgFontSize,
    },
  },
  disabled: {
    gradientColors: ['rgb(223, 220, 227)', 'rgb(223, 220, 227)'], // TODO tokenize
    text: {
      color: tokens.colorGray300,
    },
  },
  selected: {
    gradientColors: [tokens.colorBlue600, tokens.colorBlue700],
  },
  primary: {
    gradientColors: [tokens.colorGreen500, tokens.colorGreen600],
  },
  secondary: {
    gradientColors: [tokens.colorWhite, tokens.colorWhite],
    text: {
      color: tokens.colorBlue500,
    },
    button: {
      borderColor: tokens.colorGray100,
      borderWidth: 2, // TODO tokenize

      // minus the borderWidth so it's the same size as other buttons.
      paddingTop: tokens.spacingMd - 2,
      paddingBottom: tokens.spacingMd - 2,
      paddingLeft: tokens.spacingLg - 2,
      paddingRight: tokens.spacingLg - 2,
    },
  },
  destructive: {
    gradientColors: [tokens.colorWhite, tokens.colorWhite],
    text: {
      color: tokens.colorRed500,
    },
    button: {
      borderColor: tokens.colorGray100,
      borderWidth: 2, // TODO tokenize

      // minus the borderWidth so it's the same size as other buttons.
      paddingTop: tokens.spacingMd - 2,
      paddingBottom: tokens.spacingMd - 2,
      paddingLeft: tokens.spacingLg - 2,
      paddingRight: tokens.spacingLg - 2,
    },
  },
  featured: {
    gradientColors: ['rgb(250, 72, 138)', 'rgb(217, 43, 107)'], // TODO tokenize
  },
};

export default styles;
