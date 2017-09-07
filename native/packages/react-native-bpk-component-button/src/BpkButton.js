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
   Text,
   TouchableHighlight,
   Platform,
 } from 'react-native';
 import React from 'react';
 import PropTypes from 'prop-types';

 const IOS_TOKENS = require('bpk-tokens/tokens/ios/base.react.native.common.js');
 const ANDROID_TOKENS = require('bpk-tokens/tokens/android/base.react.native.common.js');

 const tokens = Platform.select({
   ios: () => IOS_TOKENS,
   android: () => ANDROID_TOKENS,
 })();

 const styles = {
   bpkButton: {
     base: {
       text: {
         fontSize: tokens.textSmFontSize,
         fontWeight: '600', // TODO tokenize
         textAlign: 'center',
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
       text: {
         color: tokens.colorGray300,
       },
       button: {
         backgroundColor: '#DFDCE3', // TODO tokenize
       },
     },
     selected: {
       underlayColor: tokens.colorBlue800,
       text: {
         color: tokens.colorWhite,
       },
       button: {
         backgroundColor: tokens.colorBlue600,
       },
     },
     primary: {
       underlayColor: tokens.colorGreen700,
       text: {
         color: tokens.colorWhite,
       },
       button: {
         backgroundColor: tokens.colorGreen500,
       },
     },
     secondary: {
       underlayColor: tokens.colorWhite,
       text: {
         color: tokens.colorBlue500,
       },
       button: {
         backgroundColor: tokens.colorWhite,
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
       underlayColor: tokens.colorWhite,
       text: {
         color: tokens.colorRed500,
       },
       button: {
         backgroundColor: tokens.colorWhite,
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
       underlayColor: '#C50F52', // TODO tokenize
       text: {
         color: tokens.colorWhite,
       },
       button: {
         backgroundColor: '#fa488a', // TODO tokenize
       },
     },
   },
 };

 const getStylesToApply = (textOrButton, { type, large, disabled, selected }) => {
   const stylesToApply = [styles.bpkButton.base[textOrButton], styles.bpkButton[type][textOrButton]];
   if (large) {
     stylesToApply.push(styles.bpkButton.large[textOrButton]);
   }
   if (disabled) {
     stylesToApply.push(styles.bpkButton.disabled[textOrButton]);
   }
   if (selected) {
     stylesToApply.push(styles.bpkButton.selected[textOrButton]);
   }
   return stylesToApply;
 };

 const getUnderlayColor = ({ type, selected }) => {
   if (selected) {
     return styles.bpkButton.selected.underlayColor;
   }
   return styles.bpkButton[type].underlayColor;
 };

 const BpkButton = (props) => {
   const {
     type,
     title,
     onPress,
     large,
     disabled,
     selected,
     ...rest
   } = props;
   // Note that TouchableHighlight isn't on Android, so TouchableFeedback
   // will need to be used to support it.
   return (
     <TouchableHighlight
       disabled={disabled}
       selected={selected}
       onPress={onPress}
       style={getStylesToApply('button', props)}
       underlayColor={getUnderlayColor(props)}
       {...rest}
     >
       <Text style={getStylesToApply('text', props)}>{title}</Text>
     </TouchableHighlight>
   );
 };


 BpkButton.propTypes = {
   title: PropTypes.string.isRequired,
   onPress: PropTypes.func.isRequired,
   type: PropTypes.string.isRequired,
   large: PropTypes.bool,
   disabled: PropTypes.bool,
   selected: PropTypes.bool,
 };

 BpkButton.defaultProps = {
   type: 'primary',
   large: false,
   disabled: false,
   selected: false,
 };

 export default BpkButton;
