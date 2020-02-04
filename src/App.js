import React from 'react';

import './App.css';
const people = ['Rowe', 'Prevost', 'Gare', 'hola', 'estoy', 'en', 'una', 'lista'];
function App() {
  return (
    Object.keys(people).map((person, i )=> 
    // expression goes here:
  <li key={'person_'+i}>{person}</li>
  
  )
  )
}

export default App;
