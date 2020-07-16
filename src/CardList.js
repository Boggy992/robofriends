import React from 'react'
import Card from './Card.js'

const CardList = ({ robots }) => {
//    nema potrebe za ovim if
//    if(true) {
//        throw new Error('Noooooooo')
//    }
    const cardsArray = robots.map((user,i) =>{
        return (
            <Card 
                key={user.id} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
            />
        )
    })
    
    return (
        <div>
            {cardsArray}    
        </div>
    )
}

export default CardList 