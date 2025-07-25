import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // function handleChange(e) {
  //   setIsSubmitted(false);
  //   setEnteredPlayerName(e.target.value);
  // }

  function handleClick() {
    // setIsSubmitted(true);
      // playerName ref dot current will holds the input elem because of ref 
    // and all the possible properties and methods exposed by the html elemnt
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id='player'>
      <h2>Welcome, {enteredPlayerName ?? 'Boo'}!</h2>
      <p>
        <input ref={playerName} type='text'  />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
