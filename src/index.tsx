import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import mapboxgl from 'mapbox-gl';

import App from './components/App';
//import { reduxStore } from 'store/ReduxStore';
//import './index.less';

// Initialize the 'Mapbox GL JS' module.
//const MapBoxAccessToken =
//    'pk.eyJ1IjoiZnV6enlmZXVlciIsImEiOiJjazVueXhkcm4xYnNiM2xxa3BqZ3V2M2NmIn0.umYPNCRZhBCNF3Vn-qksGQ';
//mapboxgl.accessToken = MapBoxAccessToken;
//
//    <Provider store={reduxStore} >
//        <App />
//    </Provider>,

ReactDOM.render(
    <App label={'Hello World!'}/>,
    document.getElementById('app-container')
);
