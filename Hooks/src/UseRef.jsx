import { useRef } from 'react';

function Ref() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
    <h1>USEREF</h1>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}


function Click() {
  const clicks = useRef(0);

  const handleClick = () => {
    clicks.current++;
    console.log(clicks.current);
  };
//Suppose you want to count button clicks without displaying the count
  return (
    <div>
        <br></br>
    <button onClick={handleClick}>
      Click
    </button>
    </div>
  );
}


export { Ref, Click };