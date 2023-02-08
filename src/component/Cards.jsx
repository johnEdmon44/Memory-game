import React from "react";


export default function Cards({card}) {
    return (
        <div className="container">
            {card.map((c) => (
                <div className="card">
                    <img src={c.img}></img>
                </div>
            ))}
        </div>
    )
}