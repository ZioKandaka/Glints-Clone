import './App.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import store from './store/store';
import {Provider} from 'react-redux';
import router from './router/router';


function App() {
  return (
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
