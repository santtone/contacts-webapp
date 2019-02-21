contactsApp.contactService = (function () {

    const url = 'https://tfe-training.azurewebsites.net/api/contacts';

    let contacts = [];

    const initContacts = function () {
        contacts = [
            contactsApp.Contact('Sami', 'Anttonen'),
            contactsApp.Contact('Aimo', 'Matikainen'),
            contactsApp.Contact('Ari', 'Porokka'),
            contactsApp.Contact('Kirsi', 'Toropainen')
        ];
    }();


    return {
        getAll: (onReady) => {
            const http = new XMLHttpRequest();
            http.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    let contacts = JSON.parse(http.response);
                    contacts = contacts.map(c => {
                        return contactsApp.Contact(
                            c.firstName,
                            c.lastName
                        )
                    });
                    onReady(contacts);
                }
            };
            http.open('GET', url, true);
            http.send();
        }
    }

})();
