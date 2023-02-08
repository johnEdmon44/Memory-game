import React from "react";


export default function Cards({ card, setCard }) {
    const [score, setScore] = React.useState(0)

    const handleClick = (id) => {
        setCard(card.map(c => {
                if (c.id === id && !c.clicked) {
                    setScore(prevState => prevState + 1)
                    return { ...c, clicked: true }
                } else {
                }
                return c
            })
        .sort(() => Math.random() - 0.5)
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