import React from 'react'

const List = (props) => {
  return (
    <div>
        <div className="contact-list">

        <div className="contact-card">
            <img src= {props.userUrl} alt='profile'/>

            <div className="contact-info">
                <h3> {props.userName} </h3>
                <p> {props.userEmail} </p>
            </div>

        </div>

    </div>

    </div>
  )
}

export default List

// https://i.pravatar.cc/100