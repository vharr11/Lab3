var map = L.map('map').setView([34.055448, -90.182421], 4);

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
}).addTo(map);

var lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer",
{ layers: 1,
format: 'image/png',
transparent: true,
attribution: "NOAA",
}).addTo(map);

var radar = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
}).addTo(map);


var temperature = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer", {
    layers: 1,
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad",
		opacity: 0.30,
}).addTo(map);

// Layers used for basemap. Create an object with Layers for each basemap
// baseLayers name should match your tile layer (base map)
var baseLayers = {
    "Map": map,
    };

// we have three layers that contain WMS layers.
var overlays = {
    "Lightning": lightning,
    "Radar": radar,
		"Temperature":temperature
};

L.control.layers(baseLayers, overlays).addTo(map);
