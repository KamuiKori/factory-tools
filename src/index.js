import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/store'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store)
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

reportWebVitals();
