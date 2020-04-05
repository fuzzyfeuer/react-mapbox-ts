import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';

import App from './components/App';
//import { reduxStore } from 'store/ReduxStore';
//import './index.less';

//    <Provider store={reduxStore} >
//        <App />
//    </Provider>,
ReactDOM.render(
    <App label={'Hello World!'}/>,
    document.getElementById('app-container')
);
