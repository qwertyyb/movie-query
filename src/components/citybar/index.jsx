import React from 'react'
import {Link} from 'react-router-dom'

import {getMyCity} from '../../utils/api'
import './index.less'
export default class CityBar extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      city: ''
    }
  }
  async getMyCity() {
    let res = await getMyCity()
    this.setState({city: res.city})
  }
  componentDidMount() {
    this.getMyCity()
  }
  render() {
    return (
      <div className="citybar-wrapper">
        <Link to="/citypicker" className="city-area">{this.state.city}&nbsp;<i className="fa fa-caret-down"></i></Link>
        <div className="showing">正在上映</div>
        <div className="incoming">即将上映</div>
        <div className="search"><i className="fa fa-search"></i></div>
      </div>
    )
  }
}