import React, { Component } from 'react'
import {useState}from 'react'


export class AddContact extends Component {
    const []=useState('');
    render() {
        return (
            <div>
                <h2>Add Contact</h2>
                <form action="" className="ui form">
                    <div className="field"> <label >Name</label>   
                        <input type="text" name="name" id="" placeholder="name" /> 
                    </div>
                    <div className="field"> <label >Email</label>   
                        <input type="text" Email="name" id="" placeholder="email" /> 
                    </div>
                   
            <button className="ui button blue"></button>
                </form>
            </div>
        )
    }
}

export default AddContact;
