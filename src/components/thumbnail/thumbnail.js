import React, {Component} from 'react'
import RateStar from '../rate/rate'

import './thumbnail.css'

class ThumbNail extends Component {
  render() {
    let img = <img src={this.props.img} alt={this.props.title} className="thumbnail-img"/>
    let title = <h3 className="thumbnail-title">{this.props.title}</h3>
    return (
      <div className="thumbnail">
        <div className="thumbnail-img-content">{img}</div>
        {title}
        <div className="thumbnail-rate">
          <RateStar rate={this.props.rate} />
        </div>
        <div className="thumbnail-date">
          {this.props.date}上映
        </div>
      </div>
    )
  }
}

export default ThumbNail