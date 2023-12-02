import { useEffect, useState } from 'react';

function LifecycleDemo() {
  useEffect(() => {
    console.log('render!');
    return () => console.log('unmounting...');
  })

  return "I'm a lifecycle demo";
}

export default function Demo() {
  const [random, setRandom] = useState(Math.random());
  const [mounted, setMounted] = useState(true);

  const reRender = () => setRandom(Math.random());
  const toggle = () => setMounted(!mounted);

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <button style={{marginBottom: "12px"}} onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo/>}
    </div>
  );
}