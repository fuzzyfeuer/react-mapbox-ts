import * as React from 'react';
import { MapContext } from './MapContext';
import { initialValues } from './MapboxHelper';
const { useContext, useEffect, useState } = React;

/**
 * Info overlay that shows the current latitude/longitude and zoom.
 */
const LatLngInfo: React.FunctionComponent = () => {
    //const { lat, lng, zoom } = values;
    const lat = 10.1, lng = 20.2, zoom = 8;
    const [values, setValues] = useState(initialValues);
    const [callbackAdded, setCallbackAdded] = useState(false);

    const context = useContext(MapContext);
    const { mbMap } = context;

    // add listening callback for moving/zooming.
    useEffect(() => {
        if (mbMap !== null && !callbackAdded) {
            mbMap.on('move', () => {
                const pos = mbMap.getCenter();
                const zoom = mbMap.getZoom();
                setValues({ lat: pos.lat, lng: pos.lng, zoom });
            });
            setCallbackAdded(true);
        }
    }, [mbMap]);

    return (
        <div className="lat-lng-info" >
            (Lat <span>{values.lat.toFixed(4)}</span>,&nbsp;
            Long <span>{values.lng.toFixed(4)}</span>)&nbsp;
            Zoom <span>{values.zoom.toFixed(4)}</span>
        </div>
    );
};

export default LatLngInfo;
