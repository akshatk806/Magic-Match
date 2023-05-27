import React from 'react'
import "./SingleCard.css"

const SingleCard = ({ card }) => {
  return (
    <>
        <div className="card">
            <div>
                <img className="front-card" src={card.src} alt="card front" />
                <img className="back-card" src="/img/cover.png" alt="card back" />
            </div>
        </div>
    </>
  )
}

export default SingleCard