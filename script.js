contactsApp.search = function () {

    function onGetReady(contacts) {
        contactsApp.populateContactList(contacts);
        contacts.forEach(c => c.print());
    }

    contactsApp.contactService.getAll(onGetReady);
};

contactsApp.populateContactList = function (contacts) {
    var contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    contacts.forEach(c => {
        var item = document.createElement('li');
        item.innerHTML = c.displayName;
        contactList.appendChild(item);
    });
};
