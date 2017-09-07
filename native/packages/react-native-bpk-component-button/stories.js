import React from 'react';
import { StyleSheet, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import BpkButton from './src/BpkButton';

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

storiesOf('BpkButton', module)
  .addDecorator(getStory =>
    <View style={styles.centered}>
      {getStory()}
    </View>,
  )
  .add('Default', () => (
    <View>
      <BpkButton title="Primary" onPress={action('primary clicked')} />
      <BpkButton large title="Primary" onPress={action('primary large clicked')} />
      <BpkButton disabled title="Disabled" onPress={action('disabled clicked')} />
      <BpkButton selected title="Selected" onPress={action('selected clicked')} />
      <BpkButton type="featured" title="Featured" onPress={action('featured clicked')} />
      <BpkButton type="secondary" title="Secondary" onPress={action('secondary clicked')} />
      <BpkButton type="destructive" title="Destructive" onPress={action('destructive clicked')} />
    </View>
  ));
