import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import "./Card.css";

export default function Card() {
    const personajes = [
        {name: "Thomas Shelby", img: "https://vader.news/__export/1607804422330/sites/gadgets/img/2020/12/12/thomas_shelby_portada.jpg_419070470.jpg"},
        {name: "Sheldon Cooper", img: "https://neurosumma.com/wp-content/uploads/2021/02/Sheldon-Cooper-Death-TBBTH-Trending-Today-DKODING.jpg"},
        {name: "Ragnar Lodbrok", img: "https://m.media-amazon.com/images/M/MV5BMTU0NzkyOTQ2Nl5BMl5BanBnXkFtZTgwOTc5MTM0ODE@._V1_SY1000_CR0,0,1466,1000_AL_.jpg"}
    ]
    const [people, setPeople] = useState(personajes);
    return (
        <div className="card">
            <div className="card__container">
                {people.map(person => (
                    <TinderCard 
                        character={person} 
                        className="swipe" 
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div className="card__content" style={{backgroundImage: `url(${person.img})`}}>
                            <h3> {person.name} </h3>
                        </div>
                        
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
