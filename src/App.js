import React from 'react'
import { Provider } from 'react-redux'
import { Routing } from './routing'
import {store} from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>

  );
}

export default App;
