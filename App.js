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
    let views = inputButtons.map((row, idx) => {
      let inputRow = row.map((buttonVal, columnIdx) => {
        return <InputButton
                    value={buttonVal} 
                    highlight={this.state.selectedSymbol === buttonVal}
                    onPress = {this._onInputButtonPressed.bind(this, buttonVal)}
                    key={'butt-' + columnIdx}
               />;
      });

     return <View style={inputRow} key={'row-' + idx}>{inputRow}</View>;
    })

     return views;

  }
 _onInputButtonPressed(input) {
      switch (typeof input) {
        case 'number':
          return this._handleNumberInput(input)
        case 'string':
          return this._handleStringInput(input) 
      }
    } 

  _handleStringInput(str) {
    switch (str) {
      case '/':
      case '*':
      case '+':
         this.setState({
           selectedSymbol: str,
           previousInputValue: this.state.inputValue,
           inputValue: 0
         });
        break;

      case '=': 
        let symbol = this.state.selectedSymbol,
            inputValue = this.state.inputValue,
            previousInputValue = this.state.previousInputValue;

         if(!symbol) {
           return;
         }  

         this.setState({
             previousInputValue: 0,
             inputValue: eval(previousInputValue + symbol + inputValue),
             selectedSymbol: null
         });
         break; 
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