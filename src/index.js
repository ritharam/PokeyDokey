import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Home from './Home';
import App from './components/http/App';
import Socket from './components/socket/public/Socket';
import rootReducer from './components/http/redux/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const router = createBrowserRouter([
  {path: '/', element:<Home/>},
  {path: '/http', element:<App/>},
  {path: '/socket', element:<Socket/>},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  </React.StrictMode>
);