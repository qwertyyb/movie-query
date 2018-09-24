import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

export default (props) => {
  return (
    <div className="citybar-wrapper">
      <Link to="/citypicker" className="city-area">
        {props.city}&nbsp;
        <i className="fa fa-caret-down"/>
      </Link>
      <div className="search">
      <i className="fa fa-search"/>
      </div>
    </div>
  )
}