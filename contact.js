contactsApp.Contact = function (firstName, lastName) {

    function getDisplayName() {
        return (`${firstName} ${lastName}`);
    }

    return {
        firstName: firstName,
        lastName: lastName,
        displayName: getDisplayName(),
        print: () => {
            console.log(getDisplayName());
        }
    }
};
