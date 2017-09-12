import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { colorBlue500 } from 'bpk-tokens/tokens/ios/base.react.native.es6';

import BpkInput from '../../packages/react-native-bpk-component-input';

const styles = StyleSheet.create({
  blueInput: {
    color: colorBlue500,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const width = Dimensions.get('window').width - 24;

storiesOf('BpkInput', module)
  .addDecorator(getStory =>
    <View style={styles.centered}>
      {getStory()}
    </View>,
  )
  .add('Default', () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 12,
        width: '100%',
      }}
    >
      <BpkInput
        placeholderText={'placeholder'}
        text={'Large'}
      />
      <BpkInput
        small
        placeholderText={'placeholder'}
        text={'Small'}
      />
      <BpkInput
        small
        placeholderText={'valid'}
        text={'Valid'}
        valid
      />
      <BpkInput
        placeholderText={'valid'}
        text={'Invalid'}
        valid={false}
      />
      <BpkInput
        placeholderText={'Large placeholder'}
        text={''}
      />
      <BpkInput
        disabled
        small
        placeholderText={'placeholder'}
        text={'disabled'}
      />
      <BpkInput
        small
        secureTextEntry
        placeholderText={'password'}
        text={'password'}
      />
      <BpkInput
        small
        keyboardType={'phone-pad'}
        placeholderText={'Phone number'}
        text={''}
      />
    </View>
    ));
