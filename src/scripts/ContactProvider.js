export const SaveContact = (contact) => {
       // Send to db
      return fetch("http://localhost:8088/people", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contact)
    })
}

let contacts = []

export const GetContacts = () => {
    return fetch("http://localhost:8088/people")
    .then(r => r.json())
    .then((peopleObjects) => {
        contacts = peopleObjects
    })
}

export const UseContacts = () => contacts.slice()