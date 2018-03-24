import React, {Component} from 'react'
import ThumbNail from '../../components/thumbnail/thumbnail'

import './movies.css'

export default class Movies extends Component {
  render() {
    let movies = this.props.movies
    const thumbComs = movies.map((movie, index) => (
      <ThumbNail
        key={index}
        img={movie.img}
        title={movie.title}
        rate={movie.rate}
        date={movie.date}/>)
    )
    return (
      <div className="movies">
        {thumbComs}
      </div>
    );
  }
}