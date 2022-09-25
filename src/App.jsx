import './App.css'
import { Route } from "wouter";
import PokemonList from './components/PokemonList';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Home}/>
      <Route path='/pokemon/:pag' component={PokemonList}/>
    </div>
  )
}

export default App
