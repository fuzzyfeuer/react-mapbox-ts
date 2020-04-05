import { Map, NavigationControl } from 'mapbox-gl';

// initialize the 'Mapbox GL' access key.
// TODO: -- pull token from '.env' (dotenv)
const accessToken =
    'pk.eyJ1IjoiZnV6enlmZXVlciIsImEiOiJjazVueXhkcm4xYnNiM2xxa3BqZ3V2M2NmIn0.umYPNCRZhBCNF3Vn-qksGQ';

//const styleUrl = 'mapbox://styles/mapbox/streets-v11';
const styleUrl = 'mapbox://styles/fuzzyfeuer/ck7253a9i10yk1iqwwak1tusc';

// Map current position/zoom.
export const initialValues = {
    /* North Scotland */
    center: {
        lat: 58.99,
        lng: -2.94
    },
    zoom: 8
};

/**
 *
 */
export const initMapbox = (containerElem: HTMLElement): Map => {
    console.debug('Preparing Mapbox.');

    const values = initialValues;

    const mbMap = new Map({
        accessToken: accessToken,
        container: containerElem,
        style: styleUrl,
        center: [values.center.lng, values.center.lat],
        zoom: values.zoom,
        antialias: true
    });

    mbMap.on('load', () => {
        mbMap.addControl(new NavigationControl());
    });

    return mbMap;
};

