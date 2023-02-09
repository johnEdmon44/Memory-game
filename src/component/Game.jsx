import React from "react";
import { cards } from "../cards";


export default function Game() {
    const [card, setCard] = React.useState(cards)
    const [score, setScore] = React.useState(0)
    const [gameOver, setGameOver] = React.useState(false)
    

    const handleClick = (id) => {
        setCard(card.map(c => {
                if (c.id === id && !c.clicked) {
                    setScore(prevState => prevState + 1)
                    return { ...c, clicked: true }
                } else {
                    setGameOver(true)
                }
                return c
            })
            .sort((a, b) => a.clicked === b.clicked ? 0 : a.clicked ? 1 : -1)
        )
    }


    React.useEffect(() => {
        console.log(card);
    }, [card]);



    return (
        <div>
            <h1>Score: {score}</h1>
            <div className="container">
                {card.map((c, index) => (
                    <div className="card" key={index} onClick={() => handleClick(c.id)}>
                        <img src={c.img}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}