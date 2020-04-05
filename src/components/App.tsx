import * as React from 'react';
import GeoMap from './map/GeoMap';
import LatLngInfo from './map/LatLngInfo';
//import './App.less';

interface AppProps {
    label: string;
}

/**
 *
 */
const App = (props: AppProps) => {
    console.info('App | Starting --------->>');
    return (
        <div className="app">
            <div>{props.label}</div>
            <GeoMap center={100} >
                <LatLngInfo />
            </GeoMap>
        </div>
    );
}

export default App;
