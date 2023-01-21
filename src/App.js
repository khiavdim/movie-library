import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";
import Form from './Components/Form/Form';
import List from './Components/List/List';

function App() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4200/api/movies")
    .then(res => {
      setMoviesList(res.data);
    })
    .catch(err => {
      if(err) {
        console.log('Error getting Movies Database', err.res)
        }}
      )
    }
  )

  return (
    <div className="App">
      <div className="Container">
        <div className="Title">Screen It</div>
        {/* {moviesList} */}
        <Form />
        <List />
      </div>
    </div>
  );
}

export default App;