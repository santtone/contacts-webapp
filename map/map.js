contactsApp.map = (function () {

    let map; // OpenLayers map
    let layer;
    let source;
    const mapProjection = 'EPSG:3857';
    const dataProjection = 'EPSG:4326';
    const markerColor = 'rgba(13, 106, 168, 0.9)';

    function init() {
        source = new ol.source.Vector();
        layer = new ol.layer.Vector({
            source: source,
            style: () => {
                return new ol.style.Style({
                    image: new ol.style.Circle({
                        radius: 8,
                        fill: new ol.style.Fill({
                            color: markerColor
                        })
                    })
                });
            }
        });
        map = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),
                layer
            ],
            target: 'map',
            view: new ol.View({
                center: [3029895.008365, 8787659.393834],
                zoom: 12,
                projection: mapProjection
            })
        });
        // Add feature popups
        contactsApp.mapPopup.addToMap(map);
    }

    return {
        initialize: () => init(),
        updateSource: (featureCollection) => {
            source.clear(); // removes existing features from source
            const features = (new ol.format.GeoJSON()).readFeatures(featureCollection, {
                featureProjection: mapProjection,
                dataProjection: dataProjection
            });
            source.addFeatures(features);
            map.getView().fit(source.getExtent()); // fits map to features
        }
    }
})();
