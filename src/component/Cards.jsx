import React from "react";


export default function Cards({ card, setCard }) {
    const handleClick = (id) => {
        setCard(card.map(c => {
            if (c.id === id) {
              return { ...c, clicked: true }
            }
            return c
        }))
    }


    React.useEffect(() => {
        console.log(card);
    }, [card]);



    return (
        <div className="container">
            {card.map((c, index) => (
                <div className="card" key={index} onClick={() => handleClick(c.id)}>
                    <img src={c.img}></img>
                </div>
            ))}
        </div>
    )
}