import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id='challenges'>
        <TimerChallenge title='easy' targetTime={1} />
        <TimerChallenge title='moderate' targetTime={5} />
        <TimerChallenge title='tough' targetTime={10} />
        <TimerChallenge title='mean' targetTime={15} />
      </div>
    </>
  );
}

export default App;
