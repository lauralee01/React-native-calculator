import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import InputButton from './src/components/InputButton';

const inputButtons = [
     [1, 2, 3, '/'],
     [4, 5, 6, '*'],
     [7, 8, 9, '-'],
     [0, '.', '=', '+']
 ];

class App extends Component {
 
  render() {
     const { rootContainer, displayContainer, inputContainer, inputRow } = styles;
    return (
        <View style={rootContainer}>
          <View style={displayContainer}></View>
          <View style={inputContainer}></View>
        </View>
      )
  }

  _renderInputButtons() {
    let views = [];
    inputButtons.forEach((row, rowIndex) => {
      let inputRow = [];
      row.forEach((input, inputIndex) => {
        inputRow.push(<InputButton value={input} key={`btn-${inputIndex}`} />);
      });
      views.push(<View style={inputRow} key={`row-${rowIndex}`} >{inputRow}</View>);
    })
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
  }, 

  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
}

export default App;