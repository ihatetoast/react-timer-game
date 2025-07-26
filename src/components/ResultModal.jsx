import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

// this is for react 19 and later
export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  // rem time is milli but targ time is seconds
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });


// portal example: good for overlays but also anywhere you want to yeet
// a component out of the zone where you're using it.
  return createPortal(
    <dialog ref={dialog} className='result-modal' onClose={onReset}>
      {userLost &&  <h2>You lost</h2>}
      {!userLost &&  <><h2>Your score: {score}</h2><p>Look at you, Boo. <br />Getting all fancy with your clickety clicks.</p></>}

      <p>
        The target time was <strong>{targetTime}</strong> seconds. <br />You stopped
        the timer with <strong>{formattedRemainingTime} second{+formattedRemainingTime === 1 ? '' : 's'} left.</strong>
      </p>
      <form method='dialog' onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}

// react before would yell at you with ref so you
// used forwardRef

// const ResultModal = forwardRef(function ResultModal({ result, targetTime },ref) {

//   return (
//     <dialog ref={ref} className='result-modal'>
//       <h2>You {result} or Your Score:</h2>
//       <p>
//         The target time was <strong>{targetTime}</strong> seconds. You stopped
//         the timer with <strong>X seconds left.</strong>
//       </p>
//       <form method='dialog'>
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// });

// export default ResultModal;
