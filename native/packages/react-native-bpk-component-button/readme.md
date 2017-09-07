# react-native-bpk-component-button

> Backpack React Native button component.

## Installation

```sh
npm install react-native-bpk-component-button --save-dev
```

## Usage

```js
import React, { Component } from 'react';
import { View } from 'react-native';
import BpkButton from 'react-native-bpk-component-button';

export default class App extends Component {
  render() {
    return (
      <View>
        <BpkButton title="Book flight" onPress={() => {}} />
      </View>
    );
  }
}
```

## Props

| Property    | PropType                                     | Required | Default Value |
| ----------- | -------------------------------------------- | -------- | ------------- |
| title       | string                                       | true     | -             |
| onPress     | function                                     | true     | -             |
