import { ContactList } from "./ContactList.js"
import { SaveContact } from "./ContactProvider.js"


export const ContactForm = () => {
    document.querySelector(".contact-form").innerHTML = `
    <input type="text" placeholder="Name" id="name-input">
    <input type="tel" placeholder="Phone Number" id="phone-input">
    <input type="email" placeholder="Email" id="email-input">
    <button id="save-contact">Save Contact</button>`
}

// 2. Make the save button work on the contact form
//     - Listen for a click - CHECK
//     - Figure out what the user typed into the input fields - CHECK
//     - Send that info to the database
//     - Reprint all of our contacts
//     - Files involved: ContactProvider.js, single contact component, ContactList.js

document.querySelector(".contact-form").addEventListener("click", (eventObject) => {
    if(eventObject.target.id === "save-contact"){
        console.log("You clicked the button")
        const nameInputValue = document.querySelector("#name-input").value
        const phoneInputValue = document.querySelector("#phone-input").value
        const emailInputValue = document.querySelector("#email-input").value

        const contactObject = {
            name: nameInputValue,
            phone: phoneInputValue,
            email: emailInputValue
        }

        SaveContact(contactObject)
        .then(ContactList)
        // call contact list here
    }

})