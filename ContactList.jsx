import React from 'react'
import ContactCard from './ContactCard'
Import {useState} from 'react'
const ContactList = (props) => {
    console.log(props);
    const renderContacts= props.contacts
        .map(contact=>{ return <ContactCard contact={contact}/>     })
   

    return <div className="ui celled list">{renderContacts}</div>

}

export default ContactList
