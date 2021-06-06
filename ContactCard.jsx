
import React from 'react'

const ContactCard = () => {
     const {name,id,email }=props.contact;
    return (
     <div className="item">
                <div className="content">
                    <div className="header"> <div >{name}</div>     </div> 
         <div >{email}</div>
          <i className="trash alternate outline icon "></i>
    )
}

export default ContactCard

