let categories = [
    {
      id: 1,
      genre: "Action/Adventure",
      type: "action-adventure",
    },
    {
      id: 2,
      genre: "Comedy",
      type: "comedy",
    },
    {
      id: 3,
      genre: "Documentary",
      type: "documentary",
    },
    {
      id: 4,
      genre: "Drama",
      type: "drama",
    },
    {
      id: 5,
      genre: "Horror",
      type: "horror",
    },
    {
      id: 6,
      genre: "Romance",
      type: "romance",
    },
    {
      id: 7,
      genre: "Science Fiction",
      type: "sci-fi",
    },
  ];
  
  module.exports = {
    getCategories(req, res) {
      res.status(200).send(categories);
    },
  };