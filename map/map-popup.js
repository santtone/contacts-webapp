contactsApp.mapPopup = (function () {

    // Elements that make up the popup.
    let container;
    let content;

    let overlay; // Create an overlay to anchor the popup to the map.
    let map; // OpenLayers Map component

    function addMouseMoveListener() {
        map.on('pointermove', (e) => {
            const features = map.getFeaturesAtPixel(e.pixel, {hitTolerance: 5});
            if (features) {
                const firstFeature = features[0]; // TODO: What if we have multiple features here
                content.innerHTML = `<p>${firstFeature.get('displayName')}</p>`;
                overlay.setPosition(e.coordinate);
            } else {
                overlay.setPosition(null);
            }
        });
    }

    function createAndAddOverlay() {
        container = document.getElementById('map-popup');
        content = document.getElementById('map-popup-content');
        overlay = new ol.Overlay({
            element: container,
            autoPan: true, // auto pan moves the map so popup fits to the view
            autoPanAnimation: {
                duration: 250
            }
        });
        map.addOverlay(overlay);
    }

    return {
        addToMap: (mapComponent) => {
            // Map exists --> Popup already added to the map
            if (map) {
                return;
            }
            map = mapComponent;
            createAndAddOverlay();
            addMouseMoveListener();
        }
    }
}());
