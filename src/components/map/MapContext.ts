import * as React from 'react';
import { Map } from 'mapbox-gl';

export interface IMapContext {
    mbMap: Map | null;
};

const initialContext: IMapContext = {
    mbMap: null
};

export const MapContext = React.createContext(initialContext);
