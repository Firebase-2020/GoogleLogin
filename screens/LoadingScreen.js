import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
}

export default LoadingScreen;
