import { useRef } from 'react';

export default function Counter() {
  let countRef = useRef(0);

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
  console.log(countRef.current)

  }

  console.log(countRef.current)

  return (
    <button ref={countRef} onClick={handleClick}>
      You clicked {countRef.current} times
    </button>
  );
}
