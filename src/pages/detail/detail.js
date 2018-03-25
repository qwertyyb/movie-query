import React from 'react'
import {getMovieInfo} from '../../utils/api'

import './detail.css'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
    console.log(this.props)
    this.getDetail(this.props.match.params.id)
  }
  async getDetail(id) {
    let res = await getMovieInfo(id)
    console.log({...res})
    this.setState({...res})
  }
  render() {
    if (!this.state.title) {
      return null
    }
    let thumb = this.state.images.large
    let type = this.state.genres.join('/')
    let time = this.state.durations.join('/')
    let language = this.state.languages.join('/')
    let rate = this.state.rating.average
    let date = this.state.pubdates.join('/')
    return (
      <div className="detail-page">
        <div className="top-wrapper">
          <img src={thumb} alt={this.state.title} className="mask"/>
          <div className="left">
            <img src={thumb} alt={this.state.title} className="thumb"/>
          </div>
          <div className="right">
            <ul>
              <li className="title">{this.state.title}</li>
              <li className="type"><span className="item-title">类型：</span>{type}</li>
              <li className="time"><span className="item-title">时长：</span>{time}</li>
              <li className="language"><span className="item-title">语言：</span>{language}</li>
              <li className="rate"><span className="item-title">评分：</span>{rate?rate+'分':'暂无评分'}</li>
              <li className="date"><span className="item-title">日期：</span>{date}</li>
            </ul>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-item">
            <h3 className="detail-item__title">剧情梗概</h3>
            <div className="detail-item__content">{this.state.summary}</div>
          </div>
        </div>
      </div> 
    )
  }
}