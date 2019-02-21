contactsApp.contactGeometryUtils = (function () {
    return {
        contactsToFeatureCollection: (contacts) => {
            return {
                type: 'FeatureCollection',
                features: contacts.map(c => {
                    return {
                        type: 'Feature',
                        properties: c,
                        geometry: {
                            type: 'Point',
                            coordinates: c.location
                        }
                    };
                })
            };
        }
    }
})();
