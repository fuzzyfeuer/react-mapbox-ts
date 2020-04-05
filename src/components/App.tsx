import * as React from 'react';
import GeoLayer from './map/GeoLayer';
import GeoMap from './map/GeoMap';
import GeoSource from './map/GeoSource';
import LatLngInfo from './map/LatLngInfo';
//import './App.less';

import * as exampleCablesGeo from '../geojson/example-cables-geo.json';

interface AppProps {
    label: string;
}

/**
 *
 */
const App = (props: AppProps) => {
    console.info('App | Starting --------->>');

    const sourceId1 = 'source:exampleCables';
    // @ts-ignore: Property 'default' does not exist on type 'object'.
    const sourceData1 = (exampleCablesGeo.default as object);
    const layerId1 = 'layer:exampleCables';
    const layerOptions = {
        type: 'line',
        paint: {
            'line-color': ['get', 'color'],
            'line-opacity': 0.8,
            'line-width': 5
        },
        layout: {
            'line-cap': 'butt',    // 'round'
            'line-join': 'round'   // 'miter'
        }
    };

    return (
        <div className="app">
            <div>{props.label}</div>
            <GeoMap center={100} >
                <LatLngInfo />
                <GeoSource sourceId={sourceId1} data={sourceData1} />
                <GeoLayer
                    sourceId={sourceId1}
                    layerId={layerId1}
                    options={layerOptions}
                />
            </GeoMap>
        </div>
    );
}

export default App;
