contactsApp.search = function () {

    function onGetReady(contacts) {
        contactsApp.populateContactList(contacts);
        contactsApp.showContactsOnMap(contacts);
        contacts.forEach(c => c.print());
    }

    contactsApp.contactService.getAll(onGetReady);
};

contactsApp.populateContactList = function (contacts) {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach(c => {
        const item = document.createElement('li');
        item.innerHTML = c.displayName;
        contactList.appendChild(item);
    });
};

contactsApp.showContactsOnMap = function (contacts) {
    const featureCollection = contactsApp.contactGeometryUtils.contactsToFeatureCollection(contacts);
    contactsApp.map.updateSource(featureCollection);
};

// called on body's onload event
contactsApp.onLoad = function () {
    contactsApp.map.initialize();
};
