import './App.css';
import { useState} from "react";
import Form from './Components/Form/Form';
import List from './Components/List/List';

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  }

  return (
    <div className="App">
      <div className="Container">
        <div className="Title">Screen It</div>
        <Form movies={movies} addMovie={addMovie}/>
        <List movies={movies}/>
      </div>
    </div>
  );
}

export default App;