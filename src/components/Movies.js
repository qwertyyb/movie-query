import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import ThumbNail from './Thumbnail'


const Movies = ({ isLoadingMore, movies, showLoadMore, onLoadMore, className }) => {
  const loadText = isLoadingMore ? '正在加载' : '加载更多'
  return (
    <div className={className}>
      <div className="movies">
        {movies.map(({ id, img, title, date, rate }, index) => (
          <Link to={`/detail/${id}`} key={id} className="movie">
            <ThumbNail
              img={img}
              title={title}
              rate={rate}
              date={date}/>
          </Link>)
        )}
      </div>
      {showLoadMore && <button className="load-btn"
        disabled={isLoadingMore}
        onClick={onLoadMore}>{loadText}</button>}
    </div>
  );
}

const StyledMovies = styled(Movies)`
  .movies {
      display: flex;
      flex-wrap: wrap;
      min-width: 200px;
  }
  .movie {
      margin: 8px 6px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 30%;
  }
  .load-btn {
      width: 100%;
      font-size: 18px;
      height: 48px;
      border: none;
      color: @theme-color;
      outline: none;
  }
  .load-btn[disabled] {
      color: #ccc;
  }
`

export default StyledMovies
