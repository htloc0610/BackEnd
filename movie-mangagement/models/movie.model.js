const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  ComingSoon: Boolean,
  Title: String,
  Year: String,
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Poster: String,
  Metascore: String,
  imdbRating: String,
  imdbVotes: String,
  imdbID: String,
  Type: String,
  totalSeasons: String,
  Response: String,
  Images: [String],
});

const Movie = mongoose.model("Movie", MovieSchema, "movie-list");

module.exports = Movie;
