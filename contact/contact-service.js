contactsApp.contactService = (function () {

    const url = 'https://tfe-training.azurewebsites.net/api/contacts';

    return {
        getAll: (onReady) => {
            const http = new XMLHttpRequest();
            http.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    let contacts = JSON.parse(http.response);
                    contacts = contacts.map(c => {
                        return contactsApp.Contact(
                            c.firstName,
                            c.lastName,
                            c.location
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
