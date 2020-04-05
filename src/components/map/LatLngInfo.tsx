import * as React from 'react';
import { MapContext } from './MapContext';
import { initialValues } from './MapboxHelper';
const { useContext, useEffect, useState } = React;

/**
 * Info overlay that shows the current latitude/longitude and zoom.
 */
const LatLngInfo: React.FunctionComponent = () => {
    const [values, setValues] = useState(initialValues);
    const [callbackAdded, setCallbackAdded] = useState(false);

    const context = useContext(MapContext);
    const { mbMap } = context;

    const onMove = () => {
        const pos = mbMap.getCenter();
        const zoom = mbMap.getZoom();
        setValues({ center: { lat: pos.lat, lng: pos.lng}, zoom });
    };

    // add callback for the map moving/zooming.
    useEffect(() => {
        if (mbMap !== null && !callbackAdded) {
            mbMap.on('move', onMove);
            setCallbackAdded(true);
        }
    }, [mbMap]);

    const { center, zoom } = values;
    return (
        <div className="lat-lng-info" >
            (Lat <span>{center.lat.toFixed(4)}</span>,&nbsp;
            Long <span>{center.lng.toFixed(4)}</span>)&nbsp;
            Zoom <span>{zoom.toFixed(4)}</span>
        </div>
    );
};

export default LatLngInfo;
