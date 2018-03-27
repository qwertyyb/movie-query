import React from 'react'
import './top-header.less'

export default class TopHeader extends React.Component {
  render() {
    return (
      <div className="top-header">
      <img src={this.props.thumb} alt={this.props.title} className="mask"/>
      <div className="left">
        <img src={this.props.thumb} alt={this.props.title} className="thumb"/>
      </div>
      <div className="right">
        <ul>
          <li className="title">{this.props.title}</li>
          <li className="type"><span className="item-title">类型：</span>{this.props.type}</li>
          <li className="time"><span className="item-title">时长：</span>{this.props.time}</li>
          <li className="language"><span className="item-title">语言：</span>{this.props.language}</li>
          <li className="rate"><span className="item-title">评分：</span>{this.props.rate?this.props.rate+'分':'暂无评分'}</li>
          <li className="date"><span className="item-title">日期：</span>{this.props.date}</li>
        </ul>
      </div>
    </div>
    )
  }
}