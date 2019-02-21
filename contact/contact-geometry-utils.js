contactsApp.contactGeometryUtils = (function () {
    return {
        contactsToFeatureCollection: (contacts) => {
            return {
                type: 'FeatureCollection',
                features: contacts.map(c => {
                    return {
                        type: 'Feature',
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
