import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie'

class App extends React.Component{
  state = {
    isLoading: true,
    movie: []
  };
  getMovies = async() => {
      const {data : {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      this.setState({movies, isLoading:false})
  }
  componentDidMount(){
      this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <div>
        {isLoading ? 'Loading' :
          movies.map(movie => (
          <Movie key ={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />
        ))}
      </div>
    )
  }
}

export default App;
