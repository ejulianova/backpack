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
   Text,
   TouchableHighlight,
 } from 'react-native';
 import React from 'react';
 import PropTypes from 'prop-types';
 import LinearGradient from 'react-native-linear-gradient';

 import styles from './BpkButton-styles';

 const getTextStyle = ({ type, large, disabled }) => {
   const textStyle = [styles.base.text];
   if (styles[type].text) {
     textStyle.push(styles[type].text);
   }
   if (large) {
     textStyle.push(styles.large.text);
   }
   if (disabled) {
     textStyle.push(styles.disabled.text);
   }
   return textStyle;
 };

 const getButtonStyle = ({ type, disabled, selected }) => {
   const btnStyle = [styles.base.button];
   if (styles[type].button) {
     btnStyle.push(styles[type].button);
   }
   if (selected) {
     btnStyle.push(styles.selected.button);
   }
   if (disabled) {
     btnStyle.push(styles.disabled.button);
   }
   return btnStyle;
 };

 const getGradientColors = ({ type, disabled, selected }) => {
   let stylesToApply = styles[type].gradientColors;
   if (selected) {
     stylesToApply = styles.selected.gradientColors;
   }
   if (disabled) {
     stylesToApply = styles.disabled.gradientColors;
   }
   return stylesToApply;
 };

 const BpkButton = (props) => {
   const {
     type,
     title,
     onPress,
     large,
     disabled,
     selected,
     children,
     ...rest
   } = props;
   // Note that TouchableHighlight isn't on Android, so TouchableFeedback
   // will need to be used to support it.
   return (
     <LinearGradient style={styles.base.container} colors={getGradientColors(props)}>
       <TouchableHighlight
         style={getButtonStyle(props)}
         disabled={disabled}
         selected={selected}
         onPress={onPress}
         underlayColor={styles.base.underlayColor}
         {...rest}
       >
         <View>
           <Text style={getTextStyle(props)}>{title}</Text>
           {children}
         </View>
       </TouchableHighlight>
     </LinearGradient>
   );
 };

 BpkButton.propTypes = {
   title: PropTypes.string,
   onPress: PropTypes.func.isRequired,
   type: PropTypes.string.isRequired,
   large: PropTypes.bool,
   disabled: PropTypes.bool,
   selected: PropTypes.bool,
   children: PropTypes.node,
 };

 BpkButton.defaultProps = {
   title: null,
   type: 'primary',
   large: false,
   disabled: false,
   selected: false,
   children: null,
 };

 export default BpkButton;
