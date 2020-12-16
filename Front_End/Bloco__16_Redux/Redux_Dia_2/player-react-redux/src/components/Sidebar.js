import React from 'react';
import selectMovie from '../actions/movieAction';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  render() {
    const { categories, selectMovie } = this.props;
    return (
      <aside>
        {categories.map(category => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map(movie => (
                <li key={movie.id}>
                  {movie.title} was released in {movie.realeased}
                  <button type="button" onClick={() => selectMovie(category, movie)}>
                    Selecionar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}
const mapStateToProps = state => ({
  categories: state.movieReducer.categories,
});
const mapDispatchToProps = dispatch => ({
  selectMovie: (category, movie) => dispatch(selectMovie(category, movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
