let movies = [
    {
      id: 1,
      title: "Eternal Sunshine of the Spotless Mind",
      category: "Drama",
      rating: "5"
    },
  ];
  
  let id = 2;
  
  module.exports = {
    getMovies(req, res) {
      res.status(200).send(movies);
    },
  
    addMovie(req, res) {
      let {
        title,
        category,
        rating
      } = req.body;
      let newMovie = {
        id,
        title,
        category,
        rating
      };
      id++;
      movies.push(newMovie);
      res.status(200).send(movies);
    },
  
    editMovie(req, res) {
      let { id } = req.params;
      let {
        rating,
      } = req.query;
      let index = movies.findIndex(movie => movie.id === +id);
      movies[index].rating = rating;
      res.status(200).send(movies);
    },
  
    deleteMovie(req, res) {
      let { id } = req.params;
      let index = movies.findIndex(movies => movies.id === +id);
      index !== -1 && movies.splice(index, 1);
      res.status(200).send(movies);
    }
  };