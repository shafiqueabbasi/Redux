import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  count: 0,
  user: {
    name: 'doe',
    age: 24,
    image: '../../_blank'
  }
};

  const reducer = (state = initialState, action) => {
    console.log('reducer', state, action);

    switch(action.type){
      case 'INCREMENT':
        // state.count += 1
        return {
          count: state.count + 1
        }
      case 'DECREMENT': 
        return {
          count: state.count - 1
        }  
      case 'RESET':
        return {
          count: 0
        };
      default: 
      return state;  
    }
  }

const store = createStore(reducer);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "RESET" });

const RootApp = () => (
    <Provider store={store}>
      <App/>
    </Provider>
  );

ReactDOM.render(<RootApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


      {/* https://daveceddia.com/redux-tutorial/ */}
