import React from 'react'
import {getMovieInfo} from '../../utils/api'

import './detail.less'

export default class Detail extends React.Component {
  constructor(props) {
    super(props)

    this.showFull = this.showFull.bind(this)
    this.hideFull = this.hideFull.bind(this)

    this.state = {
      fulldetail: false,
      movieInfo: {}
    }
  }
  componentDidMount() {
    console.log(this.props)
    this.getDetail(this.props.match.params.id)
  }
  async getDetail(id) {
    let res = await getMovieInfo(id)
    this.setState({movieInfo: res})
  }
  showFull(type) {
    this.setState({['full'+type]: true})
  }
  hideFull(type) {
    this.setState({['full'+type]: false})
  }
  render() {
    if (!this.state.movieInfo.title) {
      return null
    }
    let movieInfo = this.state.movieInfo
    let thumb = movieInfo.images.large
    let type = movieInfo.genres.join('/')
    let time = movieInfo.durations.join('/')
    let language = movieInfo.languages.join('/')
    let rate = movieInfo.rating.average
    let date = movieInfo.pubdates.join('/')
    let actors = movieInfo.casts
    return (
      <div className="detail-page">
        <div className="top-wrapper">
          <img src={thumb} alt={this.state.title} className="mask"/>
          <div className="left">
            <img src={thumb} alt={this.state.title} className="thumb"/>
          </div>
          <div className="right">
            <ul>
              <li className="title">{this.state.movieInfo.title}</li>
              <li className="type"><span className="item-title">类型：</span>{type}</li>
              <li className="time"><span className="item-title">时长：</span>{time}</li>
              <li className="language"><span className="item-title">语言：</span>{language}</li>
              <li className="rate"><span className="item-title">评分：</span>{rate?rate+'分':'暂无评分'}</li>
              <li className="date"><span className="item-title">日期：</span>{date}</li>
            </ul>
          </div>
        </div>
        <div className="detail-wrapper">
          <div className={"detail-item " + (this.state.fulldetail?'full':'')}>
            <h3 className="detail-item__title">剧情梗概</h3>
            <div className="detail-item__content">{movieInfo.summary}</div>
            <button onClick={()=>this.showFull('detail')} className="detail-item__btn more-btn">显示更多</button>
            <button onClick={()=>this.hideFull('detail')} className="detail-item__btn summary-btn">隐藏更多</button>
          </div>
          <div className="detail-item">
            <h3 className="detail-item__title">演员</h3>
            <div className="detail-item__actors">
              {actors.map(actor => (
                <div key={actor.id} className="actor">
                  <img src={actor.avatars.large} alt={actor.name}/>
                  <h4 className="actor-name">{actor.name}</h4>
                </div>))}
            </div>
          </div>
          <div className="detail-item">
            <h3 className="detail-item__title">剧照</h3>
            <div className="detail-item__images">
              {movieInfo.photos.map(photo => (
                <div key={photo.id} className="img-container">
                  <img src={photo.cover} alt={photo.alt}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> 
    )
  }
}