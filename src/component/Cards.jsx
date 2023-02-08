import React from "react";
import { cards } from "../cards";


export default function Cards() {
    return (
        <div className="container">
            {cards.map((card) => (
                <div className="card">
                    <img src={card.img}></img>
                </div>
            ))}
        </div>
    )
}