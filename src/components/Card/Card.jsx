import React, {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import "./Card.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Card() {
    const [people, setPeople] = useState([]);

    useEffect(async () => {
        const querySnapshot = await getDocs(collection(db, "people"));
        querySnapshot.forEach((doc) => {
            const person = {
                id: doc.id,
                name: doc.data().name,
                image: doc.data().image
            }
            console.log(person);

            setPeople((people) => [...people, person]);

        });
    }, []);

    
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
                        <div className="card__content" style={{backgroundImage: `url(${person.image})`}}>
                            <h3> {person.name} </h3>
                        </div>
                        
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
