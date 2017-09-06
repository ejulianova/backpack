# react-native-bpk-component-button

> Backpack React Native button component.

## Installation

```sh
npm install react-native-bpk-component-button --save-dev
```

## Usage

```js
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BpkButton from 'react-native-bpk-component-button';
import * as TOKENS from 'bpk-tokens/tokens/ios/base.react.native.es6';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BpkButton>Click me</BpkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: TOKENS.spacingBase,
  }
});
```

## Props

| Property    | PropType                                     | Required | Default Value |
| ----------- | -------------------------------------------- | -------- | ------------- |
| children    | -                                            | true     | -             |
