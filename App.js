import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';

class App extends Component {
 
  render() {
     const { rootContainer, displayContainer, inputContainer } = styles;
    return (
        <View style={rootContainer}>
          <View style={displayContainer}></View>
          <View style={inputContainer}></View>
        </View>
      )
  }
}

const styles = {
  rootContainer: {
    flex: 1
  },

  displayContainer: {
    flex: 2,
    backgroundColor: '#193441'
  },

  inputContainer: {
    flex: 8,
    backgroundColor: '#3E606F'
  }
}

export default App;