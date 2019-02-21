//Factory Function
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

/*
//Constructor Function
contactsApp.Contact = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    function getDisplayName() {
        return (`${firstName} ${lastName}`);
    }

    this.displayName = getDisplayName();
};*/

/*
// ES6 Class
class Contact {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}*/
