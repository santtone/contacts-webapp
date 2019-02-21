contactsApp.search = function () {

    function onGetReady(contacts) {
        contactsApp.populateContactList(contacts);
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
