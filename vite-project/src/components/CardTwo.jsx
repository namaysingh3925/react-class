import React from 'react'

const CardTwo = (props) => {
    function clickHandle() {
        console.log("Clicked the card");
    }

    function handleMouseOver() {
        console.log("Mouse is over the card");
    }
    return (
        <div className='card'>
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <h4>Since {props.since}</h4>

            <p>{props.about}</p>

        </div>
    )
}

export default CardTwo