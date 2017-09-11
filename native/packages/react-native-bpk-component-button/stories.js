import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import BpkButton from './src/BpkButton';

import ArrowImage from './rightarrow_360.png';

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMargin: {
    marginBottom: 10,
  },
  image: {
    height: 12,
    width: 12,
  },
});

storiesOf('BpkButton', module)
  .addDecorator(getStory =>
    <View style={styles.centered}>
      {getStory()}
    </View>,
  )
  .add('Primary', () => (
    <View>
      <BpkButton type="primary" title="Primary" onPress={action('primary clicked')} />
      <BpkButton type="primary" onPress={action('primary clicked')}>
        <Image source={ArrowImage} style={styles.image} />
      </BpkButton>
      <BpkButton type="primary" large title="Primary" onPress={action('primary large clicked')} />
      <BpkButton type="primary" disabled title="Disabled" onPress={action('disabled clicked')} />
      <BpkButton type="primary" selected title="Selected" onPress={action('selected clicked')} />
      <BpkButton type="featured" title="Featured" onPress={action('featured clicked')} />
      <BpkButton type="secondary" title="Secondary" onPress={action('secondary clicked')} />
      <BpkButton type="destructive" title="Destructive" onPress={action('destructive clicked')} />
    </View>
  ));
