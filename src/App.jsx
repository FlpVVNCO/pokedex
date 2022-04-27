import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Pokemon from './components/Pokemon';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonTipo, setPokemonTipo] = useState([])
  const [pokemonHabilidad, setPokemonHabilidad] = useState([])

  return (
    
    <div className="App">
      <header className='heading'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="" />
      </header>
        <Formulario
          setPokemon={setPokemon}
          setPokemonTipo={setPokemonTipo}
          setPokemonHabilidad={setPokemonHabilidad}
        />
        <Pokemon 
          pokemon={pokemon}
          pokemonTipo={pokemonTipo}
          pokemonHabilidad={pokemonHabilidad}

        />

    </div>
  )
}

export default App
