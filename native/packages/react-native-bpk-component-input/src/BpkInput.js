/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  View,
  TextInput,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const IOS_TOKENS = require('bpk-tokens/tokens/ios/base.react.native.common.js');
const ANDROID_TOKENS = require('bpk-tokens/tokens/android/base.react.native.common.js');

const tokens = Platform.select({
  ios: () => IOS_TOKENS,
  android: () => ANDROID_TOKENS,
})();

const {
  colorGray100,
  colorGray300,
  colorGray700,
  spacingMd,
  spacingSm,
  textLgFontSize,
  textXsFontSize,
} = tokens;

const styles = StyleSheet.create({
  input: {
    borderColor: colorGray100,
    borderWidth: 1,
    borderRadius: spacingSm,
    padding: spacingSm * 3,
    flexDirection: 'row',
    height: 48,
  },
  text: {
    fontSize: textLgFontSize,
    color: colorGray700,
    width: 'auto',
    flex: 1,
    fontWeight: Platform.OS === 'ios' ? tokens.textLgFontWeight : undefined,
    fontFamily: Platform.OS === 'android' ? 'sans-serif-medium' : 'System',
  },
  smallInput: {
    padding: spacingMd,
    height: 32,
  },
  smallText: {
    fontSize: textXsFontSize,
    fontWeight: Platform.OS === 'ios' ? tokens.textXsFontWeight : undefined,
    fontFamily: Platform.OS === 'android' ? 'sans-serif' : 'System',
  },
  placeholderText: {
    fontStyle: 'italic',
  },
  disabledText: {
    color: colorGray100,
  },
  icon: {
    flex: 0,
    width: 24,
    height: 24,
  },
  smallIcon: {
    width: 16,
    height: 16,
  },
});

const BpkInput = (props) => {
  const { small, valid, text, placeholderText, disabled, style: innerStyle, ...rest } = props;

  let iconSource = null;

  const style = [styles.input];
  const textStyle = [styles.text];
  const iconStyle = [styles.icon];
  if (small) {
    style.push(styles.smallInput);
    textStyle.push(styles.smallText);
    iconStyle.push(styles.smallIcon);
  }
  if (disabled) {
    textStyle.push(styles.disabledText);
  }
  if (text === '') {
    textStyle.push(styles.placeholderText);
  }
  if (valid !== null) {
    iconSource = valid ? require('./tick-circle-green-500.png') : require('./exclamation-circle-red-500.png'); // eslint-disable-line
    if (valid) {
      style.push(styles.validOuter);
    } else {
      style.push(styles.errorOuter);
    }
  }

  if (innerStyle) { style.push(innerStyle); }


  return (
    <View
      style={style}
    >
      <TextInput
        padding={0}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={colorGray300}
        style={textStyle}
        editable={!disabled}
        value={text}
        placeholder={placeholderText}
        {...rest}
      />
      {iconSource &&
        <Image
          style={iconStyle}
          source={iconSource}
        />
      }
    </View>
  );
};

BpkInput.propTypes = {
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  valid: PropTypes.bool,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  placeholderText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

BpkInput.defaultProps = {
  disabled: false,
  small: false,
  style: null,
  valid: null,
};

export default BpkInput;
