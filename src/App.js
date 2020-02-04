import React from 'react';
import events from './dbLibros.json'
import './App.css';

class App extends React.Component{
  

render(){
  return(
      <div>
        <h1> Soy el JSON</h1>
        {events.map((detalle, id)=>{
        return( <h1>{detalle.title}{detalle.date}</h1>)
        
          
        })}
      </div>
  )
}
}


export default App;
