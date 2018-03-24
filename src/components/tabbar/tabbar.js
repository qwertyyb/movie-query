import React from 'react'
import '../../assets/font/iconfont.css'
import './tabbar.css'

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
          <i className="tab-item__img iconfont icon-mediafromall"/>
          <h3 className="tab-item__title">正在上映</h3>
        </div>
        <div className={this.props.curTab==='incoming'?activeClassName:defaultClassName}>
          <i className="tab-item__img iconfont icon-clock" onClick={this.onTabClicked.bind(this, 'incoming')}/>
          <h3 className="tab-item__title">即将上映</h3>
        </div>
      </div>
    )
  }
}