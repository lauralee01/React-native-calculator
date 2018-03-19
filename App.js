import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import InputButton from './src/InputButton';

const inputButtons = [
     [1, 2, 3, '/'],
     [4, 5, 6, '*'],
     [7, 8, 9, '-'],
     [0, '.', '=', '+']
 ];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    }
  }

  render() {
     const { rootContainer, displayContainer, inputContainer, inputRow, displayText } = styles;
    return (
        <View style={rootContainer}>
          <View style={displayContainer}>
              <Text style={displayText}>{this.state.inputValue}</Text>
          </View>
          <View style={inputContainer}>
              {this._renderInputButtons()}
             
          </View>
        </View>
      )
  }

  _renderInputButtons() {
    let views = [];
     for (var r = 0; r < inputButtons.length; r ++) {
         let row = inputButtons[r];

         let inputRow = [];
         for (var i = 0; i < row.length; i ++) {
           let input = row[i];
         
        inputRow.push(<InputButton value="{input}"
                                   highlight={this.state.selectedSymbol === input}
                                   onPress={this._onInputButtonPressed.bind(this, input)}
                                    key={r + "-" + i} />
                                    );
     }
     
      views.push(<View style={inputRow} key="{`row-${rowIndex}`}">{inputRow}</View>);
    }

     return views;

  }
 _onInputButtonPressed(alert) {
      switch (typeof input) {
        case 'number':
          return this._handleNumberInput(input)
      }
    } 

  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num;

    this.setState({
        inputValue: inputValue
    })
  }

}

const styles = {
  rootContainer: {
    flex: 1
  },

  displayContainer: {
    flex: 2,
    backgroundColor: '#193441',
    justifyContent: 'center'
  },

  inputContainer: {
    flex: 8,
    backgroundColor: '#3E606F'
  }, 

  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },

  displayText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20
  }
}

export default App;