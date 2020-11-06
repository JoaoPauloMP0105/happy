import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const MapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })
  
  export default MapIcon;


  // abstraindo o componente do icone para ser utilizado em outras paginas