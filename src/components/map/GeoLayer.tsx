import * as React from 'react';
import { MapContext } from './MapContext';
import { initialValues } from './MapboxHelper';
import { AnySourceData } from 'mapbox-gl';
const { useContext, useEffect, useState } = React;

interface Props {
    sourceId: string,
    layerId: string,
    options: object;
};

/**
 * 
 */
const GeoLayer: React.FunctionComponent<Props> = (props) => {
    const context = useContext(MapContext);
    const [layerAdded, setLayerAdded] = useState(false);

    const { mbMap } = context;
    const { sourceId, layerId, options } = props;

    useEffect(() => {
        if (mbMap !== null && !layerAdded) {
            // 'Error: Style is not done loading'
            mbMap.on('load', () => {
                mbMap.addLayer({
                    id: layerId,
                    source: sourceId,
                    ...options
                });
                setLayerAdded(true);
            });
        }
    }, [mbMap]);

    return (
        <div className="geo-layer"
           data-source-id={sourceId}
           data-layer-id={layerId}
         />
    );
};

export default GeoLayer;
