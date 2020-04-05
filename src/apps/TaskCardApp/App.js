import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/TaskCardApp';
import '../../styles/TaskCardApp/TaskCardApp.scss';


const store = configureStore();

function TaskCardApp() {
  return (
    <div className="App" id='TaskCardApp'>
      <header className="App-header">
        <Provider store={store}>
          <App />
        </Provider>
      </header>
    </div>
  );
}

export default TaskCardApp;
