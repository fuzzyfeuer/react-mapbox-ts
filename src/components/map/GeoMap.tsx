import * as React from 'react';
import { initMapbox } from './MapboxHelper';
import { MapContext } from './MapContext';
const { useRef, useEffect, useState } = React;

interface IProps {
    center?: number;
    viewport?: object;
};

/**
 * Map component for rendering geographic layers (using the GeoJSON format).
 */
const GeoMap: React.FunctionComponent<IProps> = (props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mbMap, setMbMap] = useState(null);

    // initialize mapbox on component mount.
    useEffect(() => {
        const mbMap = initMapbox(containerRef.current);
        setMbMap(mbMap);
    }, []);

    return (
        <div className="geo-map" >
            <div className="geo-mapbox-container" ref={containerRef} />
            <MapContext.Provider value={{ mbMap }} >
                {props.children}
            </MapContext.Provider>
        </div>
    );
};

export default GeoMap;
