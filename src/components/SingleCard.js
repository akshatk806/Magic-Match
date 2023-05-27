import React from 'react'
import "./SingleCard.css"

const SingleCard = ({ card, handleChoice, flipped }) => {

    // what we do inside this function-> we basically want to update the state in App component is either going to be choiceOne or choiceTwo
    const handleClick = () => {
        handleChoice(card);
    }

  return (
    <>
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front-card" src={card.src} alt="card front" />
                <img className="back-card" src="/img/cover.png" onClick={handleClick} alt="card back" /> {/* click should be back on the card, user is going to click on the back of it */}
            </div>
        </div>
    </>
  )
}

export default SingleCard