import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ThumbNail from '../../components/thumbnail/thumbnail'

import './movies.less'

export default class Movies extends Component {
  loadMore(type) {
    this.props.onLoadMore(type)
  }
  render() {
    let loadText = this.props.isLoadingMore ? '正在加载' : '加载更多'
    let movies = this.props.movies
    return (
      <div className="movies-wrapper">
        <div className="movies">
          {movies.map((movie, index) => (
            <Link to={"/detail/" + movie.id} key={movie.id} className="movie">
              <ThumbNail
                img={movie.img}
                title={movie.title}
                rate={movie.rate}
                date={movie.date}/>
            </Link>)
          )}
        </div>
        {!this.props.ended && <button className="load-btn"
          disabled={this.props.isLoadingMore}
          onClick={() => this.loadMore()}>{loadText}</button>}
      </div>
    );
  }
}