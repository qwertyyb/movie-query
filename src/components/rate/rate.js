import React, {Component} from 'react'
import './rate.less'

export default class RateStar extends Component {
  render() {
    let intPart = parseInt(this.props.rate / 2, 10)
    let pointPart = (this.props.rate / 2 - intPart) > 0.2 ? 0.5 : 0
    let showRate = (intPart + pointPart) * 10
    let _className = `rate-star rate${showRate}`
    if(this.props.rate) {
      return (
        <React.Fragment>
          <span className={_className}></span><span className="rate-text">{this.props.rate}</span>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <span className="rate-text">{"暂无评分"}</span>
        </React.Fragment>)
    }
  }
}