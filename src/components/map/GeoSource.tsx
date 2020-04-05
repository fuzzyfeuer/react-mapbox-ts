import * as React from 'react';
import { MapContext } from './MapContext';
import { initialValues } from './MapboxHelper';
import { AnySourceData } from 'mapbox-gl';
const { useContext, useEffect, useState } = React;

interface Props {
    sourceId: string,
    data?: object | null;
};

/**
 * 
 */
const GeoSource: React.FunctionComponent<Props> = (props) => {
    const context = useContext(MapContext);
    const [sourceAdded, setSourceAdded] = useState(false);

    const { mbMap } = context;
    const { sourceId, data } = props;

    useEffect(() => {
        if (mbMap !== null && !sourceAdded) {
            // 'Error: Style is not done loading'
            mbMap.on('load', () => {
                const source: AnySourceData = {
                    type: 'geojson',
                    // @ts-ignore: Type 'object' is not assignable to type 'FeatureCollection<Geometry...
                    data
                };
                mbMap.addSource(sourceId, source);
                setSourceAdded(true);
            });
        }
    }, [mbMap]);

    return (
        <div className="geo-source" data-source-id={sourceId} />
    );
};

export default GeoSource;
