import * as React from 'react';
//import Map from './map/Map';
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
            {props.label}
        </div>
    );
}

export default App;
