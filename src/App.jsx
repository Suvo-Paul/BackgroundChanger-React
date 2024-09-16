import React from 'react';

import CardComponents from './components/cardComponents'
import ButtonComponent from "./components/ButtonComponent"

function App() {
  return (
    <CardComponents>
      <ButtonComponent color="red" text="white"/>
      <ButtonComponent color="green" text="white"/>
      <ButtonComponent color="blue" text="white"/>
      <ButtonComponent color="olive" text="white"/>
      <ButtonComponent color="black" text="white" />
      <ButtonComponent color="purple" text="white" />
      <ButtonComponent color="lavender" text="black" />
      <ButtonComponent color="pink" text="black" />
      <ButtonComponent color="yellow" text="black" />
      <ButtonComponent color="gray" text="white" />
    </CardComponents>
  )
}

export default App
