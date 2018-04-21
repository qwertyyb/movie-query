import React from 'react'
import './tabbar.less'

export default class TabBar extends React.Component {
  onTabClicked(tab) {
    this.props.onTabChange(tab)
  }
  render() {
    let activeClassName = "tab-item actived"
    let defaultClassName = "tab-item"
    return (
      <div className="tabbar">
        <div className={this.props.curTab==='showing'?activeClassName:defaultClassName} onClick={this.onTabClicked.bind(this, 'showing')}>
          <i className="tab-item__img fa fa-video-camera"/>
          <h3 className="tab-item__title">正在上映</h3>
        </div>
        <div className={this.props.curTab==='searching'?activeClassName:defaultClassName} onClick={this.onTabClicked.bind(this, 'searching')}>
          <i className="tab-item__img fa fa-search"/>
          <h3 className="tab-item__title">热点搜索</h3>
        </div>
        <div className={this.props.curTab==='account'?activeClassName:defaultClassName}>
          <i className="tab-item__img fa fa-user-circle-o"/>
          <h3 className="tab-item__title">即将上映</h3>
        </div>
      </div>
    )
  }
}