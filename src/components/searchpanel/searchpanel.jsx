import React from 'react'
import './searchpanel.less'
import {Link} from 'react-router-dom'

export default class SearchPanel extends React.Component {
  render() {
    return (
      <div className="search-panel">
        <div className="tag-content">
          <Link to='/top250' className="tag">Top250</Link>
          <h4 className="tag">口碑榜</h4>
          <h4 className="tag">北美票房榜</h4>
          <h4 className="tag">新片榜</h4>
        </div>
        <div className="input-content">
          <input type="text" name="search"/>
          <i className="iconfont icon-search"></i>
        </div>
      </div>
    )
  }
}