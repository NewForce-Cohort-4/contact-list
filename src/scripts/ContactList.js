import { GetContacts, UseContacts } from "./ContactProvider.js"

export const ContactList = () => {
    // clear the container
    document.querySelector(".contact-container").innerHTML = ""
    // get all the contacts
    GetContacts().then(() => {
        let contactsArray = UseContacts()
        contactsArray.forEach((singleContact) => {
            document.querySelector(".contact-container").innerHTML +=
            `<p>${singleContact.name}</p>`
        })
    })
}