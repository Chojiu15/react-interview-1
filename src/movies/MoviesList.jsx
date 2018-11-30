import React from "react";

import Movie from "./Movie.jsx";

function MovieList({
  movies,
  categories,
  onMovieLike,
  onMovieDislike,
  onMovieDelete,
  onMovieFilter,
  onPageSelect,
  onCountElementSelect,
  onPageBack,
  onPageNext
}) {
  return (
    <div>
      <select
        onClick={e =>
          onMovieFilter(
            e.target.selectedIndex === 0
              ? null
              : e.target.options[e.target.selectedIndex].value
          )
        }
      >
        <option>Choose a category</option>
        {categories.map((category, i) => (
          <option key={i} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* <select onClick={e => onPageSelect(e.target.selectedIndex)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select> */}

      <button type="button" onClick={e => onPageBack(e.target.selectedIndex)}>
        previous
      </button>
      <button type="button" onClick={e => onPageNext(e.target.selectedIndex)}>
        next
      </button>

      <select
        onClick={e =>
          onCountElementSelect(e.target.options[e.target.selectedIndex].value)
        }
      >
        <option value="10">Element by page</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
      </select>

      {movies.map((movie, i) => (
        <Movie
          key={i}
          onDelete={() => onMovieDelete(movie)}
          onLike={() => onMovieLike(movie)}
          onDislike={() => onMovieDislike(movie)}
          title={movie.title}
          category={movie.category}
          likes={movie.likes}
          dislikes={movie.dislikes}
          onFilter={() => onMovieFilter(movie)}
        />
      ))}
    </div>
  );
}

export default MovieList;
