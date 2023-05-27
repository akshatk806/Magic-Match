import './App.css'

// Array of objects
// Array of cards where each card item in the array points to a specific image source in public folder
// also we create this array outside of component because there are a constant and they are never need to change and also card array also won't get recreated every time when component is rendered
const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" }
]

function App() {

  // shuffle card -> this function will do 3 things
  const shuffleCards = () => {

    // (i) take objects from line 7 to 12, duplicate them and put them all inside this new array
    const shuffledCards = [...cardImages, ...cardImages];

    // (ii) sort these images to mix and shuffle them basically randomize them
    shuffledCards.sort(() => Math.random()-0.5)       // sometimes this will be a negative number and sometimes positive, when negative the items will remain in same order, when positive it is going the swith the order around. So the end result is basically a shuffled array
    .map((card) => ({ ...card, id: Math.random() }))  // we fire a function for each item in a sorted array, each item is represented by argument card. And each time we added a property to a card the property which is already there is "src" but we added new property to each card is "id"
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App