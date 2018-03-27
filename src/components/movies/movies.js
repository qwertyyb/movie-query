import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ThumbNail from '../../components/thumbnail/thumbnail'

import './movies.less'

export default class Movies extends Component {
  render() {
    let movies = this.props.movies
    const thumbComs = movies.map((movie, index) => (
      <Link to={"/detail/" + movie.id} key={movie.id} className="movie">
        <ThumbNail
          img={movie.img}
          title={movie.title}
          rate={movie.rate}
          date={movie.date}/>
      </Link>)
    )
    return (
      <div className="movies">
        {thumbComs}
      </div>
    );
  }
}