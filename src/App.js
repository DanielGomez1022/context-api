import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

const MyContext = React.createContext()

class MyProvider extends Component {
  state = {
   name: 'Daniel',
   age: 21
  } 
  render(){
    return (
      <MyContext.Provider value = {{
        state: this.state,
        addYear: () => {
         return this.setState({age: this.state.age + 1})
        },
        subtractYear: () => {
          return this.setState({age: this.state.age - 1})
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="family">
  <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context)=> {
            return (
              <div>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.addYear}>add Year</button>
              <button onClick={context.subtractYear}>subtractYear</button>
              </div>
            )
          }}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (

      <MyProvider>
        <div>This is the app component</div>
        <Family />
      </MyProvider>
    );
  }
}

export default App;
