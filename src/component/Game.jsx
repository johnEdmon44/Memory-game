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


    const handleReset = () => {
        setGameOver(false)
        setCard(cards.map(c => ({...c, clicked: false})))
    }


    React.useEffect(() => {
        console.log(card);
    }, [card]);



    return (
        <div>
            <h1 style={{ textAlign: "center",  color: "yellow", marginTop: "2%"}}>Score: {score}</h1>


            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <h1 style={{ fontSize: "3.5rem", color: "yellow" }}>Game Over</h1>
                <button onClick={handleReset}>Reset</button>
            </div>


            <div className="container">
                {card.map((c, index) => (
                    <div className="card" key={index}>
                        {gameOver ? 
                            <img src={c.img} /> 
                            : <img src={c.img} onClick={() => handleClick(c.id)} />
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}