import React, { useState } from 'react'
import List from './List'

const Card = () => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Url, setUrl] = useState('')
    const [contacts, setContacts] = useState([])

    const submitHandler = (e) =>{
        e.preventDefault();    

        const contactObj = {
            name: Name,
            email: Email,
            url: Url
        }

        setContacts([...contacts, contactObj])


    console.log(contactObj)

        setUrl('')
        setName('')
        setEmail('')
    }


  return (
    <div className="form-card">
        <h2>Add Contact</h2>

        <form onSubmit={(e)=>{
                submitHandler(e)
            }}
        id="contactForm">

            <div className="input-group">
                <label>Image URL</label>
                <input value={Url}
                onChange={(elem)=>{
                    setUrl(elem.target.value)
                }}
                type="url" 
                placeholder="Enter image url" 
                />
            </div>

            <div className="input-group">
                <label>Name</label>
                <input 
                value={Name}
                onChange={(elem)=>{
                    setName(elem.target.value)
                }}
                type="text" 
                placeholder="Enter name" 
                />
            </div>

            <div className="input-group">
                <label>Email</label>
                <input value={Email}
                onChange={(elem)=>{
                    setEmail(elem.target.value)
                }}
                type="email" 
                placeholder="Enter email" 
                />
            </div>
            <button type="submit">Add Contact</button>
        </form>
        
    {contacts.map(function(elem){
    return <List 
        userUrl = {elem.url}
        userName = {elem.name}
        userEmail = {elem.email}
        />
    })}

    </div>
  )
}

export default Card