import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import InputButton from './src/components/InputButton';

const inputButtons = [
     [1, 2, 3, '/'],
     [4, 5, 6, '*'],
     [7, 8, 9, '-'],
     [0, '.', '=', '+'],
     ['c', 'ce']
 ];

class App extends Component {
 
  render() {
     const { rootContainer, displayContainer, inputContainer, inputRow } = styles;
    return (
        <View style={rootContainer}>
          <View style={displayContainer}></View>
          <View style={inputContainer}>
              {this._renderInputButtons()}
          </View>
        </View>
      )
  }

  _renderInputButtons() {
     let views = [];

     for (var r = 0; r < inputButtons.length; r++) {
       let row = inputButtons[r];

       let inputRow = [];
       for (var i = 0; i < row.length; i++) {
         let input = row[i];

         inputRow.push(
             <InputButton value={input} key={r + "-" + i}/>
           );
       }
       views.push(<View style={inputRow} key={"row-" + r}>{inputRow}</View>)
     }
    return views;
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