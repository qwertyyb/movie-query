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

  tabChanged(tabName) {
    this.props.onTabChange(tabName)
  }
  render() {
    return (
      <div className="citybar-wrapper">
        <Link to="/citypicker" className="city-area">{this.state.city}&nbsp;<i className="fa fa-caret-down"></i></Link>
        <div onClick={()=>this.tabChanged('showing')}
         className={"tab-item" + (this.props.curTab === 'showing'?' active':'')}>正在上映</div>
        <div onClick={()=>this.tabChanged('incoming')}
         className={"tab-item" + (this.props.curTab === 'incoming'?' active':'')}>即将上映</div>
        <div className="search"><i className="fa fa-search"></i></div>
      </div>
    )
  }
}